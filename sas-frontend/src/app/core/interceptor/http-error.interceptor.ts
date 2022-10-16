import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SweetAlertService } from '../service/sweet-alert.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private sweetAlert: SweetAlertService){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(e => {
        this.sweetAlert.error(e?.error?.message)
        return throwError(e.error)
      })
    )
  }
  
}
