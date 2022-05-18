import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BeneficiaryService } from '../service/beneficiary.service';

@Injectable({ providedIn: 'root' })
export class BeneficiaryResolver implements Resolve<any> {
 
    constructor(private beneficiaryService: BeneficiaryService) {}
 
  resolve(): Observable<any> | Promise<any> | any {
    return this.beneficiaryService.getBeneficiarySelectOptions();
  }
}
