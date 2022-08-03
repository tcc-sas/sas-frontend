import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserResolver } from 'src/app/core/resolvers/users-route.resolver';
import { FilterModule } from 'src/app/shared/components/filter/filter.module';
import { MainBackgroundModule } from 'src/app/shared/components/main-background/main-background.module';
import { MiddleSectionModule } from 'src/app/shared/components/middle-section/middle-section.module';
import { RegistrationButtonModule } from 'src/app/shared/components/registration-button/registration-button.module';
import { TableDetailsModule } from 'src/app/shared/components/table-details/table-details.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsRegistrationComponent } from './products/products-registration/products-registration.component';
import { ProductsComponent } from './products/products.component';
import { UsersRegistrationComponent } from './users/users-registration/users-registration.component';
import { UsersComponent } from './users/users.component';



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
    ReactiveFormsModule,
    FormsModule,

    TableDetailsModule,
    RegistrationButtonModule,
    MainBackgroundModule,
    TableModule,
    FilterModule,
    MiddleSectionModule,
  ],
  providers: [
    UserResolver
  ]
})
export class AdminModule { }
