import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Constants } from 'src/app/core/constants/components-constants';
import { BroadcastService } from 'src/app/core/service/broadcast.service';
import { CoveredService } from 'src/app/core/service/covered.service';
import { QueryUtilService } from 'src/app/core/service/query-util.service';
import { BroadcastType } from 'src/app/shared/models/broadcast.models';

@Component({
  selector: 'app-covered',
  templateUrl: './covered.component.html',
  styleUrls: ['./covered.component.scss']
})
export class CoveredComponent implements OnInit {

  constants = Constants.covered;
  selectOptions$!: Observable<any>;
  data: any;

  reloadSubscription = new Subscription();
  filterSubscription = new Subscription();
  
  constructor(
    private broadcastService: BroadcastService,
    private queryUtilService: QueryUtilService,
    private coveredService: CoveredService
  ) {
    this.queryUtilService.setFilterOptions = this.constants;
  }

  ngOnInit(): void {
    this.getCoveredData();
    this.getCoveredSelectOptions();
    this.listenToBroadcasts();
  }

  private getCoveredSelectOptions(): void {
    this.selectOptions$ = this.coveredService.getCoveredSelectOptions();
  }

  private getCoveredData(): void {
    this.queryUtilService.fetchDataByUrl();
  }

  private listenToBroadcasts(): void {
    this.reloadBroadcast();
    this.filterBroadcast();
  }

  private reloadBroadcast() {
    this.reloadSubscription = this.broadcastService
      .listen(BroadcastType.Reload)
      .pipe(
        switchMap((value) =>
          this.coveredService.getAllCovered(value.payload)
        )
      )
      .subscribe((stockData) => {
        return (this.data = stockData);
      });
  }

  private filterBroadcast() {
    this.filterSubscription = this.broadcastService
      .listen(BroadcastType.Filter)
      .pipe(
        switchMap((value) =>
          this.coveredService.getCoveredByFilter(value.payload)
        )
      )
      .subscribe((stockData) => {
        return (this.data = stockData);
      });
  }

  ngOnDestroy(): void {
    this.reloadSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
  }

}
