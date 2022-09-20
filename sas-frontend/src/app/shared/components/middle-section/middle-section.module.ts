import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiddleSectionComponent } from './middle-section.component';



@NgModule({
  declarations: [MiddleSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [MiddleSectionComponent]
})
export class MiddleSectionModule { }
