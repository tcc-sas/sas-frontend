import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin, IUser, IUserData } from '../models/auth.models';
import { } from '../../core/constants/components-constants';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ADMIN_USER = 'ROLE_ADMIN'
const DEFAULT_USER = 'ROLE_USER'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  isLoggedIn(): boolean {
    return this.getUserData() && this.getToken() ? true : false;
  }

  isAdminUser(): boolean {
    const userData = this.getUserData();
    return userData.roles.some(role => role === ADMIN_USER);
  }

  isDefaultUser(): boolean {
    const userData = this.getUserData();
    return userData.roles.some(role => role === DEFAULT_USER)
  }

  saveUserData(userData: IUserData): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(userData))
  }

  getUserData(): IUserData {
    const userData = window.sessionStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }

  saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }

  getToken(): string | null {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    return token ? token : null;
  }

  logout(): void {
    window.sessionStorage.clear();
  }

  login(login: ILogin): Observable<any> {
    const url = environment.endpoints.authController.login;
    return this.http.post<ILogin>(url, login);
  }

  register(user: IUser): Observable<any>{
    const url = environment.endpoints.authController.register;
    return this.http.post<IUser>(url, user);
  }
}
