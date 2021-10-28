import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariosComponent } from '../beneficiarios/beneficiarios.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { PainelAdminComponent } from './painel-admin.component';


const routes: Routes = [
  {
    path: '', 
    component: PainelAdminComponent,
    children: [{
      path: 'funcionarios',
      component: FuncionariosComponent,
    }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelAdminRoutingModule { }
