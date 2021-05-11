import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const headers = new HttpHeaders({
      'token-usuario': 'hola123456que4789tal'
    });
   

    const reqClone = req.clone({
      headers
    });

    return next.handle( reqClone )
                .pipe(
                  catchError( this.manejarError )
                );    
  }

  manejarError( error: HttpErrorResponse ) {
    console.log('Manejando el error desde un método en un interceptor');
    console.warn(error);
    return throwError('Algo no estuvo bien')
  }

}
