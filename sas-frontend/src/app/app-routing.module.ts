import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/layout/login/login.component';
import { PainelAdminComponent } from './components/painel-admin/painel-admin.component';
import { MainComponent } from './shared/layout/main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { BeneficiariosComponent } from './components/beneficiarios/beneficiarios.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: MainComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'painel-admin',
    component: PainelAdminComponent,
    outlet: 'content'
  },
  {
    path: 'beneficiarios',
    component: BeneficiariosComponent,
    outlet: 'content'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
