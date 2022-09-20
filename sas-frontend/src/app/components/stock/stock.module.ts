import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterModule } from 'src/app/shared/components/filter/filter.module';
import { MainBackgroundModule } from 'src/app/shared/components/main-background/main-background.module';
import { MiddleSectionModule } from 'src/app/shared/components/middle-section/middle-section.module';
import { RegistrationButtonModule } from 'src/app/shared/components/registration-button/registration-button.module';
import { TableDetailsModule } from 'src/app/shared/components/table-details/table-details.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { StockRegistrationComponent } from './stock-registration/stock-registration.component';
import { StockComponent } from './stock.component';



@NgModule({
  declarations: [
    StockComponent,
    StockRegistrationComponent
  ],
  imports: [
    CommonModule,
    TableDetailsModule,
    RegistrationButtonModule,
    MainBackgroundModule,
    TableModule,
    FilterModule,
    MiddleSectionModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class StockModule { }
