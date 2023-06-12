import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MainComponent } from './core/components/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { AdminGuard } from './core/guards/admin.guard';
import { BeneficiaryRegistrationComponent } from './components/beneficiary/beneficiary-registration/beneficiary-registration.component';
import { BeneficiaryResolver } from './core/resolvers/beneficiary-route.resolver';
import { StockComponent } from './components/stock/stock.component';
import { StockRegistrationComponent } from './components/stock/stock-registration/stock-registration.component';
import { StockResolver } from './core/resolvers/stock-route.resolver';
import { ProductResolver } from './core/resolvers/product-route.resolver';
import { CoveredComponent } from './components/covered/covered.component';
import { MemoComponent } from './components/memo/memo.component';
import { MemoRegistrationComponent } from './components/memo/memo-registration/memo-registration.component';
import { MemoResolver } from './core/resolvers/memo-route.resolver';

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
        path: 'contemplados',
        component: CoveredComponent,
      },
      {
        path: 'cadastro-beneficiario',
        component: BeneficiaryRegistrationComponent,
        resolve: [BeneficiaryResolver]
      },
      {
        path: 'cadastro-beneficiario/:id',
        component: BeneficiaryRegistrationComponent,
        resolve: [BeneficiaryResolver, ProductResolver]
      },
      {
        path: 'estoque',
        component: StockComponent,
      },
      {
        path: 'cadastro-estoque',
        component: StockRegistrationComponent,
        resolve: [StockResolver]
      },
      {
        path: 'memorando',
        component: MemoComponent,
      },
      {
        path: 'cadastro-memorando',
        component: MemoRegistrationComponent,
        resolve: [MemoResolver]
      },
      {
        path: 'cadastro-memorando/:id',
        component: MemoRegistrationComponent,
        resolve: [MemoResolver]

      }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
