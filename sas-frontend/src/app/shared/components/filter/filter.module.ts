import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FilterComponent } from './filter.component';



@NgModule({
  declarations: [
    FilterComponent,
  ],
  
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  exports: [FilterComponent]
})
export class FilterModule { }
