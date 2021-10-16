import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../models/auth.models';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  isLoggedIn(){
    return this.getUserData() && this.getToken() ? true : false;
  }

  saveUserData(userData: JSON){
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(userData))
  }

  getUserData(){
    const userData = window.sessionStorage.getItem(USER_KEY);
    return userData ? userData : null;
  }

  saveToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }

  getToken(){
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    return token ? token : null;
  }

  logout(){
    window.sessionStorage.clear;
  }

  login(login: ILogin): Observable<any> {
    const url = environment.endpoints.authController.login;
    return this.http.post<ILogin>(url, login);
  }
}
