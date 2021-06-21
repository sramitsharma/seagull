import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthState } from '../../reducers/auth.reducer';
import { authActionTypes } from '../../actions';

@Component({
  selector: 'seagull-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl('amit@gmail.com'),
    password: new FormControl('password')
  });

  constructor(private router: Router, private authStore: Store<AuthState>) {
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const userToLogin = this.loginForm.value;
      this.authStore.dispatch(authActionTypes.onLogin({ appUser: userToLogin }));
    }
  }

  onLoginWithTwitter(): void {
    alert('Twitter login coming soon !!');
  }

  onSignUp(): void {
    this.router.navigate(['auth/register']).then(r => console.log('Data: ' + r));
  }
}
