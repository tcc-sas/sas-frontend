import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDetailsComponent } from './table-details.component';



@NgModule({
  declarations: [TableDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [TableDetailsComponent]
})
export class TableDetailsModule { }
