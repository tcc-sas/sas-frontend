import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelAdminComponent } from './painel-admin.component';
import { PainelAdminRoutingModule } from './painel-admin-routing.module';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';



@NgModule({
  declarations: [PainelAdminComponent, CadastroFuncionarioComponent],
  imports: [
    CommonModule,
    PainelAdminRoutingModule
  ]
})
export class PainelAdminModule { }
