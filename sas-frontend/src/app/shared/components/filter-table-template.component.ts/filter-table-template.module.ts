import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterModule } from '../filter/filter.module';
import { TableModule } from '../table/table.module';
import { FilterTableTemplateComponent } from './filter-table-template.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FilterTableTemplateComponent,
  ],
  imports: [
    CommonModule,
    FilterModule,
    TableModule,
    RouterModule
  ],
  exports: [FilterTableTemplateComponent]
})
export class FilterTableTemplateModule { }
