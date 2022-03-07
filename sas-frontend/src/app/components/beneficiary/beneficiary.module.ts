import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterTableTemplateModule } from 'src/app/shared/components/filter-table-template.component.ts/filter-table-template.module';
import { FilterModule } from 'src/app/shared/components/filter/filter.module';
import { BeneficiaryComponent } from './beneficiary.component';



@NgModule({
  declarations: [
    BeneficiaryComponent
  ],
  imports: [
    CommonModule,
    FilterModule,
    FilterTableTemplateModule
  ]
})
export class BeneficiaryModule { }
