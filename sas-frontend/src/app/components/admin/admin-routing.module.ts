import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from 'src/app/core/resolvers/users-route.resolver';
import { AdminComponent } from './admin.component';
import { ProductsRegistrationComponent } from './products/products-registration/products-registration.component';
import { ProductsComponent } from './products/products.component';
import { UsersRegistrationComponent } from './users/users-registration/users-registration.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '', 
    component: AdminComponent,
    children: [
          //user
      {
        path: 'usuario',
        component: UsersComponent,
      },
      {
        path: 'cadastro-usuario',
        component: UsersRegistrationComponent,
        resolve: {selectOptions: UserResolver}
      },
      {
        path: 'cadastro-usuario/:id',
        component: UsersRegistrationComponent,
        resolve: {selectOptions: UserResolver}
      },
          //products
      {
        path: 'produto',
        component: ProductsComponent,
      },
      {
        path: 'cadastro-produto',
        component: ProductsRegistrationComponent,
      },
      {
        path: 'cadastro-produto/:id',
        component: ProductsRegistrationComponent,
      },
      
   ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
