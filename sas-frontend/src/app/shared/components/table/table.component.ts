import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IConstants } from 'src/app/shared/models/constants.models';
import { QueryUtilService } from '../../../core/service/query-util.service';
import { PaginationOptions } from '../../models/pagination-options.models';
import { ASC, DESC, TableOptions } from '../../models/table-options.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data!: any;
  @Input() constants!: IConstants;

  pageEvent: PageEvent = new PageEvent();
  paginationOptions = new PaginationOptions();
  tableOptions = new TableOptions();

  constructor(private queryUtilService: QueryUtilService) {}

  ngOnInit(): void {
    this.paginationOptions;
    this.getTableFields();
    this.getTableSpacingByAmountOfColumns(this.tableOptions.tableFields.length);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.paginationOptions.paginatorLength =
        changes?.data?.currentValue?.totalElements ?? 0;
      this.paginationOptions.pageIndex =
        changes?.data?.currentValue?.number ?? 0;
    }
    if (changes['constants']) {
      this.tableOptions.tableFieldToSort =
        changes.constants?.currentValue?.fields[1]?.apiField ?? null;
    }
  }

  private getTableFields(): void {
    this.tableOptions.tableFields = this.constants.fields.filter(
      (field) => field.isTableField
    );
  }

  private getTableSpacingByAmountOfColumns(amountColumns: number): void {
    if (amountColumns) {
      let colsWidth = (100 / (amountColumns + 1)).toFixed(2);
      this.tableOptions.tableSpacing = `width: ${colsWidth}%;`;
    }
    this.tableOptions.tableSpacing = 'width: auto;';
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

  private retrievePaginationQuery(): string {
    return (
      `page=${this.paginationOptions.pageIndex}&` +
      `size=${this.paginationOptions.pageSize}&` +
      `sort=${this.tableOptions.tableFieldToSort},${this.tableOptions.tableSortDirection}`
    );
  }
}
