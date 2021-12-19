import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaryComponent } from '../beneficiary/beneficiary.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: '', 
    component: AdminComponent,
    children: [{
      path: 'usuarios',
      component: UsersComponent,
    }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
