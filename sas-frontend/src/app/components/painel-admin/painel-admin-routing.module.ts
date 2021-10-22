import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariosComponent } from '../beneficiarios/beneficiarios.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { PainelAdminComponent } from './painel-admin.component';


const routes: Routes = [
  {
    path: '', 
    component: PainelAdminComponent,
    children: [{
      path: 'cadastro-funcionario',
      component: CadastroFuncionarioComponent,
    }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelAdminRoutingModule { }
