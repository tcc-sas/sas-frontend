import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPage } from 'src/app/shared/models/page.models';
import { IUser } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

const USER_ENDPOINTS = environment.endpoints.userController;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(query = ''): Observable<IPage<IUser>> {
    const url = USER_ENDPOINTS.getAllUsers(query);
    return this.http
      .get<IPage<IUser>>(url)
      .pipe(
        catchError((error) => {
          return of(error)
        })
      );
  }

  getUsersByFilter(query = ''): Observable<any> {
    const url = USER_ENDPOINTS.getUsersByFilter(query);
    return this.http.get(url).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  registerUser(user: IUser): Observable<any> {
    const url = USER_ENDPOINTS.registerUser();
    return this.http.post<IUser>(url, user).pipe(
      catchError((error) => {
        return of(error?.error);
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

 

  updateUser(user: IUser): Observable<any> {
    const url = USER_ENDPOINTS.updateUser();
    return this.http.put<IUser>(url, user).pipe(
      catchError((error) => {
        return of(error?.error);
      })
    );
  }

  deleteUser(id: number): Observable<IUser> {
    const url = '';
    return this.http.delete<IUser>(url);
  }

  getUserSelectOptions(): Observable<any> {
    const url = USER_ENDPOINTS.getUserSelectOptions();
    return this.http.get(url).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }

 
}
