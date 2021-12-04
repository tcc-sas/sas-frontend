import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { MainComponent } from './shared/components/main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { BeneficiariosComponent } from './components/beneficiarios/beneficiarios.component';

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
            path: 'painel-admin',
            loadChildren: () => import('./components/painel-admin/painel-admin.module').then((m) => m.PainelAdminModule),
          },
        ]
      },
      {
        path: 'beneficiarios',
        component: BeneficiariosComponent,
      }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
