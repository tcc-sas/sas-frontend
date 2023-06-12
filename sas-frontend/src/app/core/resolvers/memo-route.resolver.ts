import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MemoService } from '../service/memo.service';

@Injectable({ providedIn: 'root' })
export class MemoResolver implements Resolve<any> {
 
    constructor(private memoService: MemoService) {}
 
  resolve(): Observable<any> | Promise<any> | any {
    return this.memoService.getRegisterSelectOptions();
  }
}
