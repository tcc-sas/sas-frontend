import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component'
import { CrudModule } from 'src/app/shared/components/crud-template/crud.module';



@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CrudModule
  ]
})
export class AdminModule { }
