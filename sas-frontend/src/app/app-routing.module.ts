import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MainComponent } from './core/components/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { AdminGuard } from './core/guards/admin.guard';

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
        canActivateChild: [AdminGuard],
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
