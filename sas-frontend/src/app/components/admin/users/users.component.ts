import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Constants } from 'src/app/core/constants/components-constants';
import { UserService } from 'src/app/service/user.service';
import { BroadcastType } from 'src/app/shared/models/broadcast.models';
import { BroadcastService } from 'src/app/shared/service/broadcast.service';
import { QueryUtilService } from 'src/app/shared/service/query-util.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  constants = Constants.users;
  data: any;
  subscription!: Subscription;

  constructor(
    private userService: UserService,
    private broadcastService: BroadcastService,
    private queryUtilService: QueryUtilService
  ) {
    this.queryUtilService.setFilterOptions = this.constants;
  }

  ngOnInit(): void {
    this.fetchUserData();
    this.listenToBroadcasts();
  }

  fetchUserData() {
    this.queryUtilService.fetchDataByUrl();
  }
  

  private getAllUsers(query?: string) {
    this.userService
      .getAllUsers(query)
      .subscribe((result) => (this.data = result));
  }

  private listenToBroadcasts(): void {
    this.reloadBroadcast();
    this.filterBroadcast();
  }

  private reloadBroadcast() {
    this.subscription = this.broadcastService
      .listen(BroadcastType.Reload)
      .pipe(
        switchMap((value) => this.userService.getAllUsers(value.payload))
      )
      .subscribe((userData) => {
        console.log('reload');
        return this.data = userData
      });
  }

  private filterBroadcast() {
    this.subscription = this.broadcastService
      .listen(BroadcastType.Filter)
      .pipe(
        switchMap((value) => this.userService.getUsersByFilter(value.payload))
      )
      .subscribe((userData) => {
        console.log('filter');
        return this.data = userData
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
