import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IConstants } from '../models/constants.models';
import { Location } from '@angular/common';
import { BroadcastService } from './broadcast.service';
import { Filter, Reload } from '../actions/broadcast.actions';

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
      .map((field) => field.apiObjectField);
  }

  queryStringFactory(): Promise<string> {
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

  /**
   * @todo formatar a url caso o parametro paginationQuery exista e o filterQuery tiver paginação tambem
   */
  fetchDataByUrl(paginationQuery = ''): void {
    let query = '';
    this.queryStringFactory()
      .then(
        (filterQuery) => {
            
            query = `?${filterQuery}${paginationQuery}`;
          this.broadcastService.notify(Filter(query));
          this.replaceUrl(query)
        },
        (query) => {
          query = query ? `?${query}` : '';
          this.broadcastService.notify(Reload(query));
          this.replaceUrl(query)
        }
      );
      
  }



  replaceUrl(path: string) {
    let url = this.router.url.split('?')[0];
    this.location.replaceState(url, path);
  }
}
