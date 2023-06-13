import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Constants } from 'src/app/core/constants/components-constants';
import { BeneficiaryService } from 'src/app/core/service/beneficiary.service';
import { BroadcastService } from 'src/app/core/service/broadcast.service';
import { QueryUtilService } from 'src/app/core/service/query-util.service';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';
import { Reload } from 'src/app/shared/actions/broadcast.actions';
import { BroadcastType } from 'src/app/shared/models/broadcast.models';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.scss'],
})
export class BeneficiaryComponent implements OnInit, OnDestroy {
  constants = Constants.beneficiary;
  data: any;
  selectOptions$!: Observable<any>;
  reloadSubscription = new Subscription();
  filterSubscription = new Subscription();
  deleteSubscription = new Subscription();
  benefitSubscription = new Subscription();

  constructor(
    private broadcastService: BroadcastService,
    private queryUtilService: QueryUtilService,
    private beneficiaryService: BeneficiaryService,
    private sweetAlert: SweetAlertService
  ) {
    this.queryUtilService.setFilterOptions = this.constants;
  }

  ngOnInit(): void {
    this.getBeneficiaryData();
    this.getBeneficiarySelectOptions();
    this.listenToBroadcasts();
  }

  private getBeneficiarySelectOptions(): void {
    this.selectOptions$ = this.beneficiaryService.getBeneficiarySelectOptions();
  }

  private getBeneficiaryData(): void {
    this.queryUtilService.fetchDataByUrl();
  }

  private listenToBroadcasts(): void {
    this.reloadBroadcast();
    this.filterBroadcast();
    this.deleteBroadcast();
    this.benefitBroadcast();
  }

  private deleteBroadcast() {
    this.deleteSubscription = this.broadcastService
      .listen(BroadcastType.Delete)
      .pipe(
        switchMap((value) =>
          this.beneficiaryService.deleteBeneficiary(value.payload)
        )
      )
      .subscribe((success) => {
        if(success){
          this.sweetAlert.success("Beneficiario excluído com sucesso!")
          this.broadcastService.notify(Reload())
        } 
      });
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

  private benefitBroadcast() {
    this.benefitSubscription = this.broadcastService
      .listen(BroadcastType.Benefit)
      .pipe(
        switchMap((value) =>
          this.beneficiaryService.benefitBeneficiary(value.payload)
        )
      )
      .subscribe((result) => {
        if (result) {
          this.sweetAlert.success("Beneficiado com sucesso!")
        }
      });
  }

  ngOnDestroy(): void {
    this.reloadSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
    this.deleteSubscription.unsubscribe();
    this.benefitSubscription.unsubscribe();
  }
}
