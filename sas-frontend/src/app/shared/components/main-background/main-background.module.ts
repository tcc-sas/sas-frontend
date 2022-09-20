import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainBackgroundComponent } from './main-background.component';




@NgModule({
  declarations: [
    MainBackgroundComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [MainBackgroundComponent]
})
export class MainBackgroundModule { }
