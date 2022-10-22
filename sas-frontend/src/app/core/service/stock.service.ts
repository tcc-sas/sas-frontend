import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { IStockProductRegistration } from 'src/app/shared/models/stock.models';

const STOCK_ENDPOINTS = environment.endpoints.stockController;

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private httpClient: HttpClient) {}


  getAllStock(query = ''): Observable<any> {
    const url = STOCK_ENDPOINTS.getAllStock(query);
    return this.httpClient.get<any>(url);
  }

  getAllStockByFilter(query = ''): Observable<any> {
    const url = STOCK_ENDPOINTS.getAllStock(query);
    return this.httpClient.get<any>(url);
  }


  getRegistrationOptions(): Observable<any> {
    const url = STOCK_ENDPOINTS.getRegistrationOptions();
    return this.httpClient.get<any>(url);
  }

  getStockSelectOptions(): Observable<any> {
    const url = STOCK_ENDPOINTS.getSockSelectOptions();
    return this.httpClient.get<any>(url);
  }


  saveProductsInStock(productsList: IStockProductRegistration[]){
    const url = STOCK_ENDPOINTS.registerStock();
    return this.httpClient.post<IStockProductRegistration>(url, productsList);
  }
}
