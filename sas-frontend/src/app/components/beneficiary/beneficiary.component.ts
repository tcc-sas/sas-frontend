import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Constants } from 'src/app/core/constants/components-constants';
import { BeneficiaryService } from 'src/app/core/service/beneficiary.service';
import { BroadcastService } from 'src/app/core/service/broadcast.service';
import { QueryUtilService } from 'src/app/core/service/query-util.service';
import { BroadcastType } from 'src/app/shared/models/broadcast.models';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.scss'],
})
export class BeneficiaryComponent implements OnInit, OnDestroy {
  constants = Constants.beneficiary;
  data: any;
  selectOptions: any;
  reloadSubscription = new Subscription();
  filterSubscription = new Subscription();

  constructor(
    private broadcastService: BroadcastService,
    private queryUtilService: QueryUtilService,
    private beneficiaryService: BeneficiaryService
  ) {
    this.queryUtilService.setFilterOptions = this.constants;
  }

  ngOnInit(): void {
    this.getBeneficiaryData();
    this.getBeneficiarySelectOptions();
    this.listenToBroadcasts();
  }

  private getBeneficiarySelectOptions(): void {
    this.selectOptions = this.beneficiaryService.getBeneficiarySelectOptions();
  }

  private getBeneficiaryData(): void {
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
          this.beneficiaryService.getAllBeneficiary(value.payload)
        )
      )
      .subscribe((userData) => {
        return (this.data = userData);
      });
  }

  private filterBroadcast() {
    this.filterSubscription = this.broadcastService
      .listen(BroadcastType.Filter)
      .pipe(
        switchMap((value) =>
          this.beneficiaryService.getBeneficiaryByFilter(value.payload)
        )
      )
      .subscribe((userData) => {
        return (this.data = userData);
      });
  }

  ngOnDestroy(): void {
    this.reloadSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
  }
}
