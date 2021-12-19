import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BroadcastType } from 'src/app/shared/models/broadcast.models';
import { BroadcastService } from 'src/app/shared/service/broadcast.service';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.scss']
})
export class BeneficiaryComponent implements OnInit, OnDestroy {

  constructor(private broadcastService: BroadcastService) { }
  
  subscription!: Subscription;

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

}
