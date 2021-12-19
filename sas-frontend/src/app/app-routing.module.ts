import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { MainComponent } from './shared/components/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'admin',
            loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule),
          },
        ]
      },
      {
        path: 'beneficiarios',
        component: BeneficiaryComponent,
      }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
