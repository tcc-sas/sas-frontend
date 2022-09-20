import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Constants } from 'src/app/core/constants/components-constants';
import { BroadcastService } from 'src/app/core/service/broadcast.service';
import { QueryUtilService } from 'src/app/core/service/query-util.service';
import { StockService } from 'src/app/core/service/stock.service';
import { BroadcastType } from 'src/app/shared/models/broadcast.models';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  constants = Constants.stock;
  selectOptions$!: Observable<any>;
  data: any;

  reloadSubscription = new Subscription();
  filterSubscription = new Subscription();
  
  constructor(
    private broadcastService: BroadcastService,
    private queryUtilService: QueryUtilService,
    private stockService: StockService
  ) {
    this.queryUtilService.setFilterOptions = this.constants;
  }

  ngOnInit(): void {
    this.getStockData();
    this.getStockSelectOptions();
    this.listenToBroadcasts();
  }

  private getStockSelectOptions(): void {
    this.selectOptions$ = this.stockService.getStockSelectOptions();
  }

  private getStockData(): void {
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
          this.stockService.getAllStock(value.payload)
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
          this.stockService.getAllStockByFilter(value.payload)
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
