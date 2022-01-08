import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterModule } from 'src/app/shared/components/filter/filter.module';
import { BeneficiaryComponent } from './beneficiary.component';



@NgModule({
  declarations: [
    BeneficiaryComponent
  ],
  imports: [
    CommonModule,
    FilterModule,
  ]
})
export class BeneficiaryModule { }
