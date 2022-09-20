import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterModule } from 'src/app/shared/components/filter/filter.module';
import { MainBackgroundModule } from 'src/app/shared/components/main-background/main-background.module';
import { MiddleSectionModule } from 'src/app/shared/components/middle-section/middle-section.module';
import { RegistrationButtonModule } from 'src/app/shared/components/registration-button/registration-button.module';
import { TableDetailsModule } from 'src/app/shared/components/table-details/table-details.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { BeneficiaryRegistrationComponent } from './beneficiary-registration/beneficiary-registration.component';
import { BeneficiaryComponent } from './beneficiary.component';

@NgModule({
  declarations: [
    BeneficiaryComponent,
    BeneficiaryRegistrationComponent
  ],
  imports: [
    CommonModule,
    TableDetailsModule,
    RegistrationButtonModule,
    MainBackgroundModule,
    TableModule,
    ReactiveFormsModule,
    FilterModule,
    FormsModule,
    MiddleSectionModule,
    ReactiveFormsModule,
  ]
})
export class BeneficiaryModule {}
