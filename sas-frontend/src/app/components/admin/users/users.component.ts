import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Constants } from 'src/app/core/constants/components-constants';
import { UserService } from 'src/app/core/service/user.service';
import { BroadcastType } from 'src/app/shared/models/broadcast.models';
import { BroadcastService } from 'src/app/core/service/broadcast.service';
import { QueryUtilService } from 'src/app/core/service/query-util.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  constants = Constants.users;
  data: any;
  selectOptions$!: Observable<any>;
  reloadSubscription = new Subscription();
  filterSubscription = new Subscription();

  constructor(
    private userService: UserService,
    private broadcastService: BroadcastService,
    private queryUtilService: QueryUtilService
  ) {
    this.queryUtilService.setFilterOptions = this.constants;
  }

  ngOnInit(): void {
    this.getUserData();
    this.getUserSelectOptions();
    this.listenToBroadcasts();
  }

  private getUserSelectOptions(): void {
    this.selectOptions$ = this.userService.getUserSelectOptions();
  }

  private getUserData(): void {
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
          this.userService.getAllUsers(value.payload)
        )
      ).subscribe((userData) => {
        return this.data = userData
      })
  }

  private filterBroadcast() {
    this.filterSubscription = this.broadcastService
      .listen(BroadcastType.Filter)
      .pipe(
        switchMap((value) => 
          this.userService.getUsersByFilter(value.payload)
        )
      )
      .subscribe((userData) => {
        return this.data = userData
      });
  }

  ngOnDestroy(): void {
   this.reloadSubscription.unsubscribe();
   this.filterSubscription.unsubscribe();
  }
}
