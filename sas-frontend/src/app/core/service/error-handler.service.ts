import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SweetAlertService } from './sweet-alert.service';

@Injectable({
  providedIn: 'root',
})

export class ErrorHandler {
  constructor(private sweetAlert: SweetAlertService) {}


  handle(error: any){
    this.sweetAlert.error(error.error.message)
  }

  handleBenefitError(error: any){
    this.sweetAlert.benefitError(error.error.message)
  }
}



