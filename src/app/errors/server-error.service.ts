import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpRequest, HttpHandler,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // refresh token
          //return undefined;
        } else {
          this._snackBar.open(String(error), 'X', {
            panelClass: ['error'],
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
          });
          //return throwError(error);
        }

        return Observable;
      })
    );
  }
}
