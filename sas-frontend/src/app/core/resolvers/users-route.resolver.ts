import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<any> {
 
    constructor(private userService: UserService) {}
 
  resolve(): Observable<any> | Promise<any> | any {
    return this.userService.getUserSelectOptions();
  }
}
