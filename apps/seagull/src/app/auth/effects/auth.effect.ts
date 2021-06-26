import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Router} from '@angular/router';

import { ErrorHandlerService } from '@seagull/core/services/error-handler.service';
import { authActionTypes } from '../actions';
import { User } from '@seagull/core/models/User';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEffect {
  constructor(private actions$: Actions, private firebaseService: FirebaseService, private router: Router,
              private errorService: ErrorHandlerService) {
  }

  // onSignUp effect
  onSignUp$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authActionTypes.onSignUp),
    mergeMap((payload: { appUser: User }) => {
      const {email, password} = payload.appUser;
      return this.firebaseService.firebaseSignUp({email, password})
        .pipe(
          map((res: any) => {
            const appUser: User = {
              ...payload.appUser,
              photoUrl: res.user?.photoURL,
              phoneNumber: res.user?.phoneNumber,
              twitterScreenName: null,
              userId: res.user?.uid
            };
            return authActionTypes.onSignUpSuccess({appUser});
          }),
          catchError(errorResponse => of(authActionTypes.onSignUpError({error: errorResponse})))
        );
    })
  ));

  // onSignUpFailure effect
  onSignUpFailure$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authActionTypes.onSignUpError),
    tap((errorResponse) => this.errorService.handleError(errorResponse.error))
  ), {dispatch: false});

  // onSignUpSuccess effect
  onSignUpSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authActionTypes.onSignUpSuccess),
    tap(() => this.router.navigate(['/home/dashboard']))
  ), {dispatch: false});

  // onSignOut effect
  onSignOut$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authActionTypes.onSignOut),
    tap(() => this.firebaseService.firebaseSignOut())
  ), {dispatch: false});

  // onLogin effect
  onLogin$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authActionTypes.onLogin),
    mergeMap((payload: { appUser: User }) => {
      const {email, password} = payload.appUser;
      return this.firebaseService.firebaseLogin({email, password})
        .pipe(
          map((res: any) => {
            const appUser: User = {
              email,
              password: '',
              photoUrl: res.user?.photoURL,
              phoneNumber: res.user?.phoneNumber,
              twitterScreenName: null,
              userId: res.user?.uid
            };
            return authActionTypes.onLoginSuccess({appUser});
          }),
          catchError(errorResponse => of(authActionTypes.onSignUpError({error: errorResponse})))
        );
    })
  ));

  // onLoginSuccess effect
  onLoginSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authActionTypes.onLoginSuccess),
    tap(() => this.router.navigate(['/dashboard']))
  ), {dispatch: false});

  // onLoginFail effect
  onLoginFail$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authActionTypes.onLoginFailed),
    tap((errorResponse) => this.errorService.handleError(errorResponse))
  ), {dispatch: false});

}
