import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],

  imports: [
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
