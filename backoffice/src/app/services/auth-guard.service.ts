import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { LocalData } from '@akveo/ng2-completer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    if (localStorage.getItem('token')){
      return true;
    }
    else
      this.router.navigate(['/auth']);
    // set login first error message 
  }
}
