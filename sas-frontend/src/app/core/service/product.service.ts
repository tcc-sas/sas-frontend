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
    return this.http
      .get<IPage<IProduct>>(url)
      .pipe(
        catchError((error) => {
          return of(error)
        })
      );
  }

  getProductsByFilter(query = ''): Observable<any> {
    const url = PRODUCT_ENDPOINTS.getProductsByFilter(query);
    return this.http.get(url).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  registerProduct(user: IProduct): Observable<any> {
    const url = PRODUCT_ENDPOINTS.registerProduct();
    return this.http.post<IProduct>(url, user);
  }

  getProductById(userId: string): Observable<any> {
    const url = PRODUCT_ENDPOINTS.getProductById(userId);
    return this.http.get(url).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }

  updateProduct(user: IProduct): Observable<any> {
    const url = PRODUCT_ENDPOINTS.updateProduct();
    return this.http.put<IProduct>(url, user).pipe(
      catchError((error) => {
        return of(error?.error);
      })
    );
  }

  deleteProduct(id: string): Observable<IProduct> {
    const url = PRODUCT_ENDPOINTS.deleteProduct(id);
    return this.http.delete<IProduct>(url).pipe(
      catchError(error => {
        return of(error?.error)
      })
    );
  }
}
