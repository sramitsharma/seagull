import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import { AuthState } from '../../reducers/auth.reducer';
import { User } from '@seagull/core/models/User';
import { authActionTypes } from '../../actions';

@Component({
  selector: 'seagull-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private store: Store<AuthState>) {
  }

  onSignUp(): void {
    if (this.signUpForm.valid) {
      const userToSignUp: User = this.signUpForm.value;
      this.store.dispatch(authActionTypes.onSignUp({appUser: userToSignUp}));
    }
  }

  onLogin(): void {
    this.router.navigate(['/auth']).then(res => {
    });
  }

  onLoginWithTwitter(): void {
  }
}
