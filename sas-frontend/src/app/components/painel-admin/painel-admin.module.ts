import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelAdminComponent } from './painel-admin.component';
import { PainelAdminRoutingModule } from './painel-admin-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component'
import { CrudModule } from 'src/app/shared/crud-template/crud.module';



@NgModule({
  declarations: [PainelAdminComponent, FuncionariosComponent],
  imports: [
    CommonModule,
    PainelAdminRoutingModule,
    CrudModule
  ]
})
export class PainelAdminModule { }
