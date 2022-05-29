import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Data } from '@angular/router';
import { BroadcastService } from 'src/app/core/service/broadcast.service';
import { IConstants } from 'src/app/shared/models/constants.models';
import { QueryUtilService } from '../../../core/service/query-util.service';
import { Delete } from '../../actions/broadcast.actions';
import { IBeneficiary } from '../../models/beneficiary.models';
import { BroadcastType } from '../../models/broadcast.models';
import { IPage } from '../../models/page.models';
import { PaginationOptions } from '../../models/pagination-options.models';
import { IProduct } from '../../models/product.models';
import { ASC, DESC, TableOptions } from '../../models/table-options.models';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data!: IPage<any>;
  @Input() constants!: IConstants;

  pageEvent: PageEvent = new PageEvent();
  paginationOptions = new PaginationOptions();
  tableOptions = new TableOptions();

  constructor(
    private queryUtilService: QueryUtilService,
    private broadcastService: BroadcastService
  ) {}

  ngOnInit(): void {
    this.getTableFields();
    this.getTableSpacingByAmountOfColumns();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onDataChanges(changes);
    this.onConstantsChange(changes);
  }

  private onConstantsChange(changes: SimpleChanges) {
    if (changes['constants'] && changes['constants'].currentValue) {
      this.tableOptions.tableFieldToSort =
        this.constants.fields[1].apiField ?? null;
    }
  }

  private onDataChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      this.paginationOptions.paginatorLength = this.data.totalElements ?? 0;
      this.paginationOptions.pageIndex = this.data.number ?? 0;
    }
  }

  private getTableFields(): void {
    this.tableOptions.tableFields = this.constants.fields.filter(
      (field) => field.isTableField
    );
  }

  private getTableSpacingByAmountOfColumns(): void {
    const amountColumns = this.tableOptions.tableFields.length;
    if (amountColumns) {
      let colsWidth = (100 / (amountColumns + 1)).toFixed(2);
      this.tableOptions.tableSpacing = `width: ${colsWidth}%;`;
    }
    this.tableOptions.tableSpacing = 'width: auto;';
  }

  private retrievePaginationQuery(): string {
    return (
      `page=${this.paginationOptions.pageIndex}&` +
      `size=${this.paginationOptions.pageSize}&` +
      `sort=${this.tableOptions.tableFieldToSort},${this.tableOptions.tableSortDirection}`
    );
  }

  handlePageEvent(pageEvent: PageEvent): void {
    this.paginationOptions.pageIndex = pageEvent.pageIndex;
    this.paginationOptions.pageSize = pageEvent.pageSize;

    const paginationQuery: string = this.retrievePaginationQuery();
    this.queryUtilService.fetchDataByUrl(paginationQuery);
  }

  orderBy(fieldName: string): void {
    this.tableOptions.tableFieldToSort = fieldName;
    this.tableOptions.tableSortDirection =
      this.tableOptions.tableSortDirection == ASC ? DESC : ASC;

    const paginationQuery = this.retrievePaginationQuery();
    this.queryUtilService.fetchDataByUrl(paginationQuery);
  }

  delete(rowId: string) {
    this.broadcastService.notify(Delete(rowId));
  }
}
