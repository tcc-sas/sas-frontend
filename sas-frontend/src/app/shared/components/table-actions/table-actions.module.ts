import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableActionsComponent } from './table-actions.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TableActionsComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [TableActionsComponent]
})
export class TableActionsModule { }
