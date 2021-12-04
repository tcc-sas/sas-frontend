import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IConstants } from 'src/app/shared/models/constants.models';
import { MessageData } from 'src/app/models/message-data.models';
import { MessageService } from 'src/app/service/message.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  
  @Input() constants!: IConstants;
  subscription!: Subscription;
  filterObj: { [k: string]: any } = {};
  constructor(
    private msgService: MessageService,
    private router: Router,
    private location: Location
  ) { }
 

  ngOnInit(): void {
    this.subscription = this.msgService.listen('filter', (data: any) => {
      console.log(data)
    })
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

    //constroi a query p/ o endpoint com o que foi digitado nos filtros
    let queryParams = `?`
    Object.keys(this.filterObj).forEach((key) => {
      queryParams += `${key}=${this.filterObj[key]}&`;
    });

    //seta a url com os parametros
    this.setUrlParams(this.filterObj);

    //envia a msg p/ o 1º component 
    this.msgService.notify({
      action: "filter",
      data: queryParams
    });
  }


  clearFilters(): void { 
    Object.keys(this.filterObj).forEach((key) => {
      this.filterObj[key] = '';
    });
    
    const url = this.router.url.split('?')[0];
    this.location.replaceState(url, '');
    
    this.msgService.notify({
      target: this.constants.route,
      action: 'reload',
      data: null
    });
  }

  setUrlParams(params: object): void{
    this.router.navigate([], {
      queryParams: {
        ...params,
      },
    });
  }
 

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
