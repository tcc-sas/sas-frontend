import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Constants } from 'src/app/core/constants/components-constants';
import { BroadcastType } from 'src/app/shared/models/broadcast.models';
import { BroadcastService } from 'src/app/core/service/broadcast.service';
import { QueryUtilService } from 'src/app/core/service/query-util.service';
import { ProductService } from 'src/app/core/service/product.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  constants = Constants.products;
  data: any;
  selectOptions$!: Observable<any>;

  reloadSubscription = new Subscription();
  filterSubscription = new Subscription();
  deleteSubscription = new Subscription();

  constructor(
    private productService: ProductService,
    private broadcastService: BroadcastService,
    private queryUtilService: QueryUtilService
  ) {
    this.queryUtilService.setFilterOptions = this.constants;
  }

  ngOnInit(): void {
    this.getUserData();
    this.listenToBroadcasts();
  }

  private getUserData(): void {
    this.queryUtilService.fetchDataByUrl();
  }

  private listenToBroadcasts(): void {
    this.reloadBroadcast();
    this.filterBroadcast();
    this.deleteBroadcast();
  }

  private deleteBroadcast() {
    this.deleteSubscription = this.broadcastService
      .listen(BroadcastType.Delete)
      .pipe(
        switchMap((value) => this.productService.deleteProduct(value.payload))
      ).subscribe((teste) => {
        alert(teste)
      })
  }

  private reloadBroadcast() {
    this.reloadSubscription = this.broadcastService
      .listen(BroadcastType.Reload)
      .pipe(
        switchMap((value) => this.productService.getAllProducts(value.payload))
      )
      .subscribe((productData) => {
        return (this.data = productData);
      });
  }

  private filterBroadcast() {
    this.filterSubscription = this.broadcastService
      .listen(BroadcastType.Filter)
      .pipe(
        switchMap((value) =>
          this.productService.getProductsByFilter(value.payload)
        )
      )
      .subscribe((productData) => {
        return (this.data = productData);
      });
  }

  ngOnDestroy(): void {
    this.reloadSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
    this.deleteSubscription.unsubscribe();
  }
}
