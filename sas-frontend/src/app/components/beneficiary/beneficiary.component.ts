import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/core/constants/components-constants';
import { BroadcastService } from 'src/app/core/service/broadcast.service';
import { QueryUtilService } from 'src/app/core/service/query-util.service';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.scss']
})
export class BeneficiaryComponent implements OnInit, OnDestroy {

  constants = Constants.beneficiary;
  data: any;
  selectOptions: any;
  subscription!: Subscription;


  constructor(
    private broadcastService: BroadcastService,
    private queryUtilService: QueryUtilService
  ) {
    this.queryUtilService.setFilterOptions = this.constants;
  }

  ngOnInit(): void {
    // this.getUserData();
    // this.getUserSelectOptions();
    // this.listenToBroadcasts();
  }

  // private getUserSelectOptions(): void {
  //   // this.selectOptions = this.userService.getUserSelectOptions();
  // }

  // private getUserData(): void {
  //   this.queryUtilService.fetchDataByUrl();
  // }
  
  // private listenToBroadcasts(): void {
  //   this.reloadBroadcast();
  //   this.filterBroadcast();
  // }

  // private reloadBroadcast() {
  //   this.subscription = this.broadcastService
  //     .listen(BroadcastType.Reload)
  //     .pipe(
  //       switchMap((value) => 
  //         this.userService.getAllUsers(value.payload)
  //       )
  //     ).subscribe((userData) => {
  //       return this.data = userData
  //     });
  // }

  // private filterBroadcast() {
  //   this.subscription = this.broadcastService
  //     .listen(BroadcastType.Filter)
  //     .pipe(
  //       switchMap((value) => 
  //         this.userService.getUsersByFilter(value.payload)
  //       )
  //     )
  //     .subscribe((userData) => {
  //       return this.data = userData
  //     });
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
