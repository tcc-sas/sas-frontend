import { Location } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { IConstants } from 'src/app/shared/models/constants.models';
import { BroadcastService } from 'src/app/shared/service/broadcast.service';
import { Filter, Reload } from '../../actions/broadcast.actions';
import { QueryUtilService } from '../../service/query-util.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data!: any;
  @Input() constants!: IConstants;

  tableFields: Array<any> = [];
  tableSpacing: string = '';

  pageEvent: PageEvent = new PageEvent();
  pageSizeOptions: Array<number> = [1, 2, 3];
  paginatorLength: number = 0;
  pageSize: number = 1;
  pageIndex: number = 0;

  tableFieldToSort: string = '';
  tableSortDirection: string = 'asc';
  constructor(
    private router: Router,
    private location: Location,
    private broadcastService: BroadcastService,
    private queryUtilService: QueryUtilService
  ) {}

  ngOnInit(): void {
    this.getTableFields();
    this.getTableSpacingByAmountOfColumns(this.tableFields.length);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.paginatorLength = changes?.data?.currentValue?.totalElements | 0;
      this.pageIndex = changes?.data?.currentValue?.number | 0;
    }
    if (changes['constants']) {
      this.tableFieldToSort =
        changes.constants.currentValue.fields[1].apiObjectField;
    }
  }

  private getTableFields(): void {
    this.tableFields = this.constants.fields.filter(
      (field) => field.isTableField
    );
  }

  private getTableSpacingByAmountOfColumns(amountColumns: number): void {
    if (amountColumns) {
      let colsWidth = (100 / (amountColumns + 1)).toFixed(2);
      this.tableSpacing = `width: ${colsWidth}%;`;
    }
    this.tableSpacing = 'width: auto;';
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;

    const paginationQuery: string = this.retrievePaginationQuery();
    this.queryUtilService.fetchDataByUrl(paginationQuery);
  }

  
  orderBy(fieldName: string): void {
    this.tableFieldToSort = fieldName;
    this.tableSortDirection = this.tableSortDirection == 'asc' ? 'desc' : 'asc';

    const paginationQuery = this.retrievePaginationQuery();
    this.queryUtilService.fetchDataByUrl(paginationQuery);
  }

  private retrievePaginationQuery(): string {
    return (
      `page=${this.pageIndex}&` +
      `size=${this.pageSize}&` +
      `sort=${this.tableFieldToSort},${this.tableSortDirection}`
    );
  }

  // handleQueryParamsIfExists(paginationQuery: string) {
  //   let query: string = '';


  //   this.templateService.retrieveQueryParams(filterOptionsName).then(
  //     (filterQuery) => {
  //       if (filterQuery) {
  //         query = `?${filterQuery}${paginationQuery}`;
  //         this.broadcastService.notify(Filter(query));
  //         this.replaceUrl(query);
  //       }
  //     },
  //     (reject) => {
  //       query = `?${paginationQuery}`;
  //       this.broadcastService.notify(Reload(query));
  //       this.replaceUrl(query);
  //     }
  //   );
  // }

  

}
