import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../authentication/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private readonly authSerice: AuthService, private readonly router: Router) {
  }

  login(): void {
    const user = this.loginForm.get('user')?.value as string;
    const password = this.loginForm.get('password')?.value as string;

    if(this.authSerice.login(user, password)) this.router.navigate(['/board']);
  }
}
