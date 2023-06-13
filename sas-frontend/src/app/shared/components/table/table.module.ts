import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { TableActionsModule } from '../table-actions/table-actions.module';
import { TableComponent } from './table.component';
import { CrasPipe } from '../../util/cras.pipe';
import { RolePipe } from '../../util/role.pipe';

@NgModule({
  declarations: [TableComponent, CrasPipe, RolePipe],

  imports: [CommonModule, MatPaginatorModule, RouterModule, TableActionsModule],
  exports: [TableComponent],
})
export class TableModule {}
