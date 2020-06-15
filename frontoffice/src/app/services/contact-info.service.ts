import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('http://localhost:3000/api/contactInfo')
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(new Error('test'));
  }
}
