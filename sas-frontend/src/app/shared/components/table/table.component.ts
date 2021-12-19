import { Location } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { IConstants } from 'src/app/shared/models/constants.models';
import { BroadcastService } from 'src/app/shared/service/broadcast.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data!: any;
  @Input() constants!: IConstants;
  
  tableFields: Array<any> = [];
  tableSpacing: string = '';

  pageEvent: PageEvent = new PageEvent();
  pageSizeOptions: Array<number> = [10, 25, 50];
  paginatorLength: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;

  tableFieldToSort: string = '';
  tableSortDirection: string = 'asc';
  constructor(
    // private alert: SweetAlertService,
    // private BroadcastService: MessageService,
    private router: Router,
    private location: Location,
    private msgService: BroadcastService
  ) {}

  ngOnInit(): void {
    this.tableFields = this.constants.fields.filter(field => field.isTableField);
    this.tableSpacing = this.defineTableSpacingByAmountColumns(
      this.tableFields.length
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.paginatorLength = changes?.data?.currentValue?.totalElements | 0;
      this.pageIndex = changes?.data?.currentValue?.number | 0;
    }
    if (changes['constants']) {
      this.tableFieldToSort = changes.constants.currentValue.fields[1].apiObjectField;
    }
  }

  defineTableSpacingByAmountColumns(amountColumns: number): string {
    if (amountColumns) {
      let colsWidth = (100 / (amountColumns + 1)).toFixed(2);
      return `width: ${colsWidth}%;`;
    }
    return 'width: auto;';
  }

  
  
  handlePageEvent(pageEvent: PageEvent) {
    let paginationQuery: string = '';
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;

    paginationQuery =
      `page=${pageEvent.pageIndex}&` +
      `size=${pageEvent.pageSize}&` +
      `sort=${this.tableFieldToSort},${this.tableSortDirection}`;

    this.handleQueryParamsIfExists(paginationQuery);
  }

  handleQueryParamsIfExists(paginationQuery: string) {
    let path: string = '';

    const filterOptions = this.constants.fields
      .filter((field) => field.isFilterField)
      .map((field) => field.apiObjectField);

    // this.templateService.retrieveQueryParams(filterOptions).then(
    //   (query) => {
    //     if (query) {
    //       path = `?${query}${paginationQuery}`;
    //       this.messageService.sendMessage({
    //         action: 'filter',
    //         query: path,
    //       });
    //       this.replaceUrl(path);
    //     }
    //   },
    //   (reject) => {
    //     path = `?${paginationQuery}`;
    //     this.messageService.sendMessage({
    //       action: 'load',
    //       query: path,
    //     });
    //     this.replaceUrl(path);
    //   }
    // );
  }

  replaceUrl(path: string) {
    let url = this.router.url.split('?')[0];
    this.location.replaceState(url, path);
  }

  orderBy(fieldName: string) {
    let paginationQuery: string = '';

    this.tableFieldToSort = fieldName;
    this.tableSortDirection = this.tableSortDirection == 'asc' ? 'desc' : 'asc';

    paginationQuery =
      `page=${this.pageIndex}&` +
      `size=${this.pageSize}&` +
      `sort=${this.tableFieldToSort},${this.tableSortDirection}`;

    this.handleQueryParamsIfExists(paginationQuery);
  }


}
