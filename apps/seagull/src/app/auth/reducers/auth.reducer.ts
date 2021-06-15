import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import { authActionTypes } from '../actions';
import { User } from '@seagull/core/models/User';

export const authFeatureKey = 'AuthKey';

export interface AuthState {
  appUser?: User | null;
  authError?: any;
}

export const initialAuthState: AuthState = {
  appUser: null,
  authError: null
};

const authPageReducer: ActionReducer<AuthState> = createReducer(
  initialAuthState,
  on(authActionTypes.onSignUpSuccess, (state: AuthState, action: { appUser: User }) => ({
    ...state,
    appUser: action.appUser,
    authError: null
  })),
  on(authActionTypes.onLoginSuccess, (state: AuthState, action: { appUser: User }) => ({
    ...state,
    appUser: action.appUser,
    authError: null
  })),
  on(authActionTypes.onSignOut, (state: AuthState) => ({
    ...state,
    appUser: null,
    authError: null
  }))
);

export const authReducer = (state: AuthState | undefined, action: Action): AuthState => authPageReducer(state, action);
