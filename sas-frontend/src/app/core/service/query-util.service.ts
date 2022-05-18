import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IConstants } from '../../shared/models/constants.models';
import { Location } from '@angular/common';
import { BroadcastService } from './broadcast.service';
import { Filter, Reload } from '../../shared/actions/broadcast.actions';

@Injectable({
  providedIn: 'root',
})
export class QueryUtilService {
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private broadcastService: BroadcastService
  ) {}

  private _filterOptions: string[] = [];

  set setFilterOptions(constants: IConstants) {
    this._filterOptions = constants.fields
      .filter((field) => field.isFilterField)
      .map((field) => field.apiField);
  }

  fetchDataByUrl(paginationQuery = ''): void {
    let query = '';
    this.queryStringFactory().then(
      (filterQuery) => {
        query = this.formatFilterQuery(filterQuery, paginationQuery);
        this.broadcastService.notify(Filter(query));
        this.replaceUrl(query);
      },
      (query) => {
        query = this.formatReloadQuery(query, paginationQuery);
        this.broadcastService.notify(Reload(query));
        this.replaceUrl(query);
      }
    );
  }

  private queryStringFactory(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.activatedRoute.queryParams
        .subscribe((params) => {
          let filterQuery: string = '';
          Object.keys(params).forEach((key) => {
            if (!key) {
              return;
            }
            filterQuery += `${key}=${params[key]}&`;
          });
          if (
            this._filterOptions.every((param) => filterQuery.includes(param))
          ) {
            resolve(filterQuery);
          }
          reject(filterQuery);
        })
        .unsubscribe();
    });
  }

  private formatFilterQuery(
    filterQuery: string,
    paginationQuery: string
  ): string {
    let query = '';
    if (filterQuery.includes('page') && paginationQuery) {
      query = filterQuery.split('page')[0];
      query += paginationQuery;
      return `${query}`;
    }
    return `?${filterQuery}${paginationQuery}`;
  }

  private formatReloadQuery(query: string, paginationQuery: string): string {
    if (query && paginationQuery) {
      return `?${paginationQuery}`;
    } else if (query && !paginationQuery) {
      return `?${query}`;
    } else if (!query && paginationQuery) {
      return `?${paginationQuery}`;
    }
    return '';
  }

  private replaceUrl(path: string) {
    let url = this.router.url.split('?')[0];
    this.location.replaceState(url, path);
  }
}
