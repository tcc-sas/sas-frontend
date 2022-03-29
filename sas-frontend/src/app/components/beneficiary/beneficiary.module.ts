import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTableTemplateModule } from 'src/app/shared/components/filter-table-template.component.ts/filter-table-template.module';
import { BeneficiaryRegistrationComponent } from './beneficiary-registration/beneficiary-registration.component';
import { BeneficiaryComponent } from './beneficiary.component';



@NgModule({
  declarations: [
    BeneficiaryComponent,
    BeneficiaryRegistrationComponent,
  ],
  imports: [
    CommonModule,
    FilterTableTemplateModule,
    ReactiveFormsModule
  ]
})
export class BeneficiaryModule { }
