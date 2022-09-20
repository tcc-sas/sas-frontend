import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationButtonComponent } from './registration-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegistrationButtonComponent],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [RegistrationButtonComponent],
})
export class RegistrationButtonModule {}
