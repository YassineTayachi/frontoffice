import { NgModule, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  submit(form) {
    this.auth.login(form.value).subscribe(result => {
      if (result)
        this.router.navigate(['/pages']);
    },
      (err: Response) => {

        //   if (err instanceof invalidMailOrPassword) {
        form.form.setErrors({ 'invalidMailorPass': true })
        //   } else {
        //     form.form.setErrors({ 'unknownError': true });
        //   }
      }
    );
  }

}