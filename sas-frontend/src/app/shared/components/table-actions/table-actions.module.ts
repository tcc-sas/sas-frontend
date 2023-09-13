import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableActionsComponent } from './table-actions.component';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
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
