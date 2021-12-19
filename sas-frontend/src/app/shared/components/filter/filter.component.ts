import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IConstants } from 'src/app/shared/models/constants.models';
import { Broadcast, BroadcastType } from 'src/app/shared/models/broadcast.models';
import { BroadcastService } from 'src/app/shared/service/broadcast.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Filter, Reload } from '../../actions/broadcast.actions';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  @Input() constants!: IConstants;
  filterObj: { [k: string]: any } = {};
  
  constructor(
    private broadcastService: BroadcastService,
    private router: Router,
    private location: Location
  ) { }
 

  ngOnInit(): void {
   
  }

  createFilterObject(): object {
    let obj: { [k:string] : any} = {};
    this.constants.fields
      .filter((field) => field.isFilterField)
      .map((field) => {
        obj[field.apiObjectField] = '';
      })
    return obj;
  }

  search(): void {
    //caso nada seja escrito nos campos de filtro
    if (!Object.values(this.filterObj).some((value) => value)) {
      return;
    }
    //seta a url com os parametros
    this.setUrlParams(this.filterObj);
    const queryParams = this.retrieveQueryParams();

    //envia a msg p/ o 1º component 
    this.broadcastService.notify(Filter(queryParams));
  }

  retrieveQueryParams(): string{
    let queryParams = `?`
    Object.keys(this.filterObj).forEach((key) => {
      queryParams += `${key}=${this.filterObj[key]}&`;
    });

    return queryParams;
  }

  clearFiltersAndReload(): void { 
    Object.keys(this.filterObj).forEach((key) => {
      this.filterObj[key] = '';
    });
    this.clearUrl();
    this.broadcastService.notify(Reload());
  }

  setUrlParams(queryParams: object): void{
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
