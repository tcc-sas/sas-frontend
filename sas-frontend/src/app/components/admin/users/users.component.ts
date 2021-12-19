import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Constants } from 'src/app/app-constants';
import { UserService } from 'src/app/service/user.service';
import { BroadcastType } from 'src/app/shared/models/broadcast.models';
import { BroadcastService } from 'src/app/shared/service/broadcast.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  constants = Constants.funcionarios;
  data: any;
  subscription!: Subscription;

  constructor(
    private userService: UserService,
    private broadcastService: BroadcastService
  ) { }


  ngOnInit(): void {
    this.getAllUsers();

    this.listenToTransmission();
  }

  getAllUsers(query?: string) {
    this.userService.getAllUsers(query).subscribe(
      (result) => this.data = result
    );
  }

  private listenToTransmission(): void {
    this.reloadTransmission();
    // this.filterTransmission();
  }

  private reloadTransmission() {
    this.subscription = this.broadcastService.listen(BroadcastType.Reload)
      .pipe(
        switchMap((value) => this.userService.getAllUsers(value.payload))
      )
      .subscribe((userData) => this.data = userData);
  }

  // private filterTransmission() {
  //   this.subscription = this.broadcastService.listen(BroadcastType.Reload)
  //     .pipe(
  //       switchMap((value) => this.userService.getAllUsers(value.payload))
  //     )
  //     .subscribe((userData) => this.data = userData);
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
