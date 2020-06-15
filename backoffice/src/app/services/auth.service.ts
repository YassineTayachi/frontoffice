import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post('http://localhost:3000/api/auth', credentials).pipe(
      catchError(this.handleError),
      map((response: any) => {
        const result = response;
        if (result && result.token) {
          localStorage.setItem('token', response.token);
          return true;
        }
        return false;
      }));
  }


  handleError(error) {
    // if (error.status === 400) {
    //   console.log('invalid mail or pass');
    //   return throwError(new invalidMailOrPassword(error));
    // }
    return throwError(new Error(error));
  }
}
