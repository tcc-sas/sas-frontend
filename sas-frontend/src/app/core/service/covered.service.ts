import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPage } from 'src/app/shared/models/page.models';
import { IUser } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';
import { ErrorHandler } from './error-handler.service';

const USER_ENDPOINTS = environment.endpoints.coveredController;
@Injectable({
  providedIn: 'root',
})
export class CoveredService {
  constructor(
    private http: HttpClient,
    private eh: ErrorHandler
  ) {}

  getAllCovered(query = ''): Observable<IPage<IUser> | null> {
    const url = USER_ENDPOINTS.getAllCovered(query);
    return this.http.get<IPage<IUser>>(url).pipe(
      catchError(e => {return of(null)})
    );
  }

  getCoveredByFilter(query = ''): Observable<any> {
    const url = USER_ENDPOINTS.getCoveredByFilter(query);
    return this.http.get(url);
  }

  getCoveredSelectOptions(): Observable<any> {
    const url = USER_ENDPOINTS.getCoveredSelectOptions();
    return this.http.get(url);
  }

 
}
