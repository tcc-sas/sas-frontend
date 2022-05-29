import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MainComponent } from './core/components/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { AdminGuard } from './core/guards/admin.guard';
import { BeneficiaryRegistrationComponent } from './components/beneficiary/beneficiary-registration/beneficiary-registration.component';
import { BeneficiaryResolver } from './core/resolvers/beneficiary-route.resolver';

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
        path: 'beneficiario',
        component: BeneficiaryComponent,
      },
      {
        path: 'cadastro-beneficiario',
        component: BeneficiaryRegistrationComponent,
        resolve: [BeneficiaryResolver]
      },
      {
        path: 'cadastro-beneficiario/:id',
        component: BeneficiaryRegistrationComponent,
        resolve: [BeneficiaryResolver]
      }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
