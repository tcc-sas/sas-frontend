import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const USER_ENDPOINTS = environment.endpoints.userController;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(query = ''): Observable<any> {
    const url = USER_ENDPOINTS.getAllUsers(query);
    return this.http.get(url).pipe(
      catchError((p) => {
        return of(p);
      })
    );
  }

  getUsersByFilter(query = ''): Observable<any> {
    const url = USER_ENDPOINTS.getUsersByFilter(query);
    return this.http.get(url).pipe(
      catchError((p) => {
        return of(p);
      })
    );
  }

  getUserSelectOptions(): Observable<any> {
    const url = USER_ENDPOINTS.getUserSelectOptions();
    return this.http.get(url).pipe(
      catchError((p) => {
        return of(p);
      })
    );
  }
}
