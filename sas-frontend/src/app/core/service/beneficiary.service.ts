import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mapTo, shareReplay, take, tap } from 'rxjs/operators';
import { IBeneficiary } from 'src/app/shared/models/beneficiary.models';
import { IUser } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

const USER_ENDPOINTS = environment.endpoints.beneficiaryController;
@Injectable({
  providedIn: 'root',
})
export class BeneficiaryService {
  constructor(private http: HttpClient) {}

  getAllBeneficiary(query = ''): Observable<IBeneficiary[]> {
    const url = USER_ENDPOINTS.getAllBeneficiary(query);
    return this.http.get<IBeneficiary[]>(url).pipe(
      catchError((error) => {
        return of([]);
      })
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

  getBeneficiaryById(userId: string): Observable<IBeneficiary | null> {
    const url = USER_ENDPOINTS.getBeneficiaryById(userId);
    return this.http.get<IBeneficiary | null>(url).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }

  registerBeneficiary(user: IUser): Observable<any> {
    const url = USER_ENDPOINTS.registerBeneficiary();
    return this.http.post<IUser>(url, user).pipe(
      catchError((error) => {
        return of(error?.error);
      })
    );
  }

  updateBeneficiary(user: IUser): Observable<any> {
    const url = USER_ENDPOINTS.updateBeneficiary();
    return this.http.put<IUser>(url, user).pipe(
      catchError((error) => {
        return of(error?.error);
      })
    );
  }
}
