import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component'
import { FilterTableTemplateModule } from 'src/app/shared/components/filter-table-template.component.ts/filter-table-template.module';
import { UsersRegistrationComponent } from './users/users-registration/users-registration.component';
import { UserResolver } from 'src/app/core/resolvers/users-route.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductsRegistrationComponent } from './products/products-registration/products-registration.component';



@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    UsersRegistrationComponent,
    ProductsComponent,
    ProductsRegistrationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FilterTableTemplateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    UserResolver
  ]
})
export class AdminModule { }
