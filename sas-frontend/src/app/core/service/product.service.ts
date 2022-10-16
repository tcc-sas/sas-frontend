import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPage } from 'src/app/shared/models/page.models';
import { IProduct } from 'src/app/shared/models/product.models';
import { environment } from 'src/environments/environment';

const PRODUCT_ENDPOINTS = environment.endpoints.productController;
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(query = ''): Observable<IPage<IProduct>> {
    const url = PRODUCT_ENDPOINTS.getAllProducts(query);
    return this.http.get<IPage<IProduct>>(url);
  }

  getProductsByFilter(query = ''): Observable<any> {
    const url = PRODUCT_ENDPOINTS.getProductsByFilter(query);
    return this.http.get(url);
  }

  registerProduct(user: IProduct): Observable<any> {
    const url = PRODUCT_ENDPOINTS.registerProduct();
    return this.http.post<IProduct>(url, user);
  }

  getProductById(userId: string): Observable<any> {
    const url = PRODUCT_ENDPOINTS.getProductById(userId);
    return this.http.get(url);
  }

  updateProduct(user: IProduct): Observable<any> {
    const url = PRODUCT_ENDPOINTS.updateProduct();
    return this.http.put<IProduct>(url, user);
  }

  deleteProduct(id: string): Observable<IProduct> {
    const url = PRODUCT_ENDPOINTS.deleteProduct(id);
    return this.http.delete<IProduct>(url);
  }


  getAllProductsForBeneficiary(){
    const url = PRODUCT_ENDPOINTS.getAllProductsForBeneficiary();
    return this.http.get<any>(url);
  }
}
