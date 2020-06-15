import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/api/menus')
      .pipe(catchError(this.handleError));
  }

  getMenuItems(id) {
    return this.http.get('http://localhost:3000/api/menuItems/' + id)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(new Error('test'));
  }
}
