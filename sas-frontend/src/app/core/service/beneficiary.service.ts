import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mapTo, shareReplay, take, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user/user.model';
import { environment } from 'src/environments/environment';

const USER_ENDPOINTS = environment.endpoints.beneficiaryController;
@Injectable({
  providedIn: 'root',
})
export class BeneficiaryService {
  constructor(private http: HttpClient) {}

  getAllBeneficiary(query = ''): Observable<any> {
    const url = USER_ENDPOINTS.getAllBeneficiary(query);
    return this.http.get(url).pipe(
      catchError((error) => {
        return of(null);
      }),
    );
  }

  getBeneficiaryByFilter(query = ''): Observable<any> {
    const url = USER_ENDPOINTS.getBeneficiaryByFilter(query);
    return this.http.get(url).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }

  getBeneficiarySelectOptions(): Observable<any> {
    const url = USER_ENDPOINTS.getBeneficiarySelectOptions();
    return this.http.get(url).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }

  getBeneficiaryById(userId: string): Observable<any> {
    const url = USER_ENDPOINTS.getBeneficiaryById(userId);
    return this.http.get(url).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }

  registerBeneficiary(user: IUser): Observable<any>{
    const url = USER_ENDPOINTS.registerBeneficiary();
    return this.http.post<IUser>(url, user).pipe(
      catchError((error) => {
        return of(error?.error);
      })
    );
  }

  updateBeneficiary(user: IUser): Observable<any>{
    const url = USER_ENDPOINTS.updateBeneficiary();
    return this.http.put<IUser>(url, user).pipe(
      catchError((error) => {
        return of(error?.error);
      })
    );
  }
}
