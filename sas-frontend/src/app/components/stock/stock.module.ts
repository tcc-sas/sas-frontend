import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FilterTableTemplateModule } from 'src/app/shared/components/filter-table-template.component.ts/filter-table-template.module';
import { StockRegistrationComponent } from './stock-registration/stock-registration.component';
import { StockComponent } from './stock.component';



@NgModule({
  declarations: [
    StockComponent,
    StockRegistrationComponent
  ],
  imports: [
    CommonModule,
    FilterTableTemplateModule,
    ReactiveFormsModule,
    
  ]
})
export class StockModule { }
