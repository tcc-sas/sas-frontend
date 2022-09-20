import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StockService } from '../service/stock.service';
import { UserService } from '../service/user.service';

@Injectable({ providedIn: 'root' })
export class StockResolver implements Resolve<any> {
 
    constructor(private stockService: StockService) {}
 
  resolve(): Observable<any> | Promise<any> | any {
    return this.stockService.getRegistrationOptions();
  }
}
