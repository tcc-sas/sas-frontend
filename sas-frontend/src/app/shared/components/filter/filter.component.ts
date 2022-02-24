import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IConstants, IFields } from 'src/app/shared/models/constants.models';
import { BroadcastService } from 'src/app/core/service/broadcast.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Filter, Reload } from '../../actions/broadcast.actions';
import { StringAnyMap } from '../../models/string-any-map.models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnChanges {
  @Input() constants!: IConstants;
  @Input() selectOptions: any;
  filterObj: StringAnyMap = {};
  filterFields: IFields[] = [];

  constructor(
    private broadcastService: BroadcastService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.retrieveFilterFields(changes);
    this.createFilterObject();
  }

  retrieveFilterFields(changes: SimpleChanges) {
    if (changes['constants']) {
      const fields: IFields[] = changes.constants.currentValue?.fields ?? [];
      this.filterFields = fields.filter((field) => field.isFilterField);
    }
  }

  private createFilterObject(): void {
    this.constants.fields
      .filter((field) => field.isFilterField)
      .map((field) => {
        this.filterObj[field.apiField] = '';
      });
  }

  search(): void {
    //caso nada seja escrito nos campos de filtro
    if (!Object.values(this.filterObj).some((value) => value)) {
      return;
    }
    //seta a url com os parametros
    this.setUrlParams(this.filterObj);

    const query = this.createQueryFromFilterObject();

    //envia a msg p/ o 1º component
    this.broadcastService.notify(Filter(query));
  }

  createQueryFromFilterObject(): string {
    let query = `?`;
    Object.keys(this.filterObj).forEach((key) => {
      query += `${key}=${this.filterObj[key]}&`;
    });

    return query;
  }

  clearFiltersAndReload(): void {
    Object.keys(this.filterObj).forEach((key) => {
      this.filterObj[key] = '';
    });
    this.clearUrl();
    this.setUrlParams({});
    this.broadcastService.notify(Reload());
  }

  setUrlParams(queryParams: object): void {
    this.router.navigate([], {
      queryParams: {
        ...queryParams,
      },
    });
  }

  clearUrl(): void {
    const url = this.router.url.split('?')[0];
    this.location.replaceState(url, '');
  }
}
