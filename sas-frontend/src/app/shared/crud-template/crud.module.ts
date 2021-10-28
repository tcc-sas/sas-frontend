import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudTemplateComponent } from './crud-template.component';
import { FilterComponent } from '../filter/filter.component';
import { TableComponent } from '../table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    CrudTemplateComponent,
    FilterComponent,
    TableComponent
  ],
  
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [CrudTemplateComponent]
})
export class CrudModule { }
