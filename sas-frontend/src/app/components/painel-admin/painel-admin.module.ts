import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelAdminComponent } from './painel-admin.component';
import { PainelAdminRoutingModule } from './painel-admin-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component'



@NgModule({
  declarations: [PainelAdminComponent, FuncionariosComponent],
  imports: [
    CommonModule,
    PainelAdminRoutingModule
  ]
})
export class PainelAdminModule { }
