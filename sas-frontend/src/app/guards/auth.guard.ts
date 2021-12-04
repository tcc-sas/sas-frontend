import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { IUserData } from '../shared/models/auth.models';
import { AuthService } from '../shared/service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    if (!this.authService.isLoggedIn()) {
      return this.router.createUrlTree(['/login'])
    }

    if(this.authService.isDefaultUser()){
      return true;
    }

    return false;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    
    if(this.authService.isAdminUser()){
      return true;
    }

    return this.router.createUrlTree(['/'])
  }

}
