import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaryComponent } from '../beneficiary/beneficiary.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';
import { UsersRegistrationComponent } from './users/users-registration/users-registration.component';
import { UserResolver } from 'src/app/core/resolvers/users-route.resolver';


const routes: Routes = [
  {
    path: '', 
    component: AdminComponent,
    children: [
      {
        path: 'usuarios',
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
      
   ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
