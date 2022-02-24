import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mapTo, take, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user/user.model';
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
      catchError((error) => {
        return of(null);
      })
    );
  }

  getUsersByFilter(query = ''): Observable<any> {
    const url = USER_ENDPOINTS.getUsersByFilter(query);
    return this.http.get(url).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }

  getUserSelectOptions() {
    const url = USER_ENDPOINTS.getUserSelectOptions();
    return this.http.get(url).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }

  getUserById(userId: string): Observable<any> {
    const url = USER_ENDPOINTS.getUserById(userId);
    return this.http.get(url).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }

  registerUser(user: IUser): Observable<any>{
    const url = USER_ENDPOINTS.registerUser();
    return this.http.post<IUser>(url, user).pipe(
      catchError((error) => {
        return of(error?.error);
      })
    );
  }
}
