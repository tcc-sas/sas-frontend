import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from '../service/product.service';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<any> {
 
    constructor(private productService: ProductService) {}
 
  resolve(): Observable<any> | Promise<any> | any {
    return this.productService.getAllProductsForBeneficiary();
  }
}
