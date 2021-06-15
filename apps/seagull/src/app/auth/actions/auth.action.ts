import {createAction, props} from '@ngrx/store';
import { User } from '@seagull/core/models/User';

const onLogin = createAction('[Auth] On Login', props<{ appUser: User }>());
const onLoginSuccess = createAction('[Auth] On Login Success', props<{ appUser: User }>());
const onLoginFailed = createAction('[Auth] On Login Failed', props<{ error: any }>());

const onSignUp = createAction('[Auth] On Sign Up', props<{ appUser: User }>());
const onSignUpSuccess = createAction('[Auth] On Sign Up Success', props<{ appUser: User }>());
const onSignUpError = createAction('[Auth] On Sign Up Error', props<{ error: any }>());

const onSignOut = createAction('[Auth] On Sign out');

export const authActionTypes = {
  onLogin,
  onLoginSuccess,
  onLoginFailed,
  onSignUp,
  onSignUpSuccess,
  onSignUpError,
  onSignOut
};
