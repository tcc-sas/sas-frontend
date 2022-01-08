import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BroadcastService } from 'src/app/core/service/broadcast.service';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.scss']
})
export class BeneficiaryComponent implements OnInit, OnDestroy {

  constructor(private broadcastService: BroadcastService) { }
  
  subscription!: Subscription;

  ngOnInit(): void {
    console.log("dasuhuihdashuidsa") 
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

}
