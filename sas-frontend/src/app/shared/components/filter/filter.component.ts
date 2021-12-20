import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IConstants } from 'src/app/shared/models/constants.models';
import {
  Broadcast,
  BroadcastType,
} from 'src/app/shared/models/broadcast.models';
import { BroadcastService } from 'src/app/shared/service/broadcast.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Filter, Reload } from '../../actions/broadcast.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() constants!: IConstants;
  filterObj: { [k: string]: any } = {};

  constructor(
    private broadcastService: BroadcastService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.createFilterObject();
  }

  createFilterObject() {
    this.constants.fields
      .filter((field) => field.isFilterField)
      .map((field) => {
        this.filterObj[field.apiObjectField] = '';
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
}
