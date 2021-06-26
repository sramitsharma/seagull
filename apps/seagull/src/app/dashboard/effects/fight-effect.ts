import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ErrorHandlerService } from '@core/services/error-handler.service';
import { FullTwitterUser } from '@core/models/TwitterUser';
import { fightActionTypes } from '../actions';
import { TwitterUserService } from '../services/twitter-user.service';

function isChamp1OrChamp2(user1: FullTwitterUser, user2: FullTwitterUser, id: number): FullTwitterUser {
  return (user1.id === id) ? user1 : user2;
}

@Injectable({
  providedIn: 'root'
})
export class FightEffect {

  constructor(private actions$: Actions, private twitterUserService: TwitterUserService,
              private errorService: ErrorHandlerService) {
  }

  // on fight Start Effect
  onFightStart$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(fightActionTypes.onFightStart),
    mergeMap((payload: { champNames: string[] }) => {
      const champs = payload.champNames;
      return this.twitterUserService.getTweeterMultipleUsers(champs)
        .pipe(
          map((res: FullTwitterUser[]) => {
            const champs: FullTwitterUser[] = [];
            res.forEach(user => {
              champs.push(user);
            });
            return fightActionTypes.onGetFightContext({ champs });
          }),
          catchError(errorResponse => of(fightActionTypes.onFightFailure({ fightError: errorResponse })))
        );
    })
  ));

  onFightError$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(fightActionTypes.onFightFailure),
    tap((errorResponse) => {
      return this.errorService.handleError(errorResponse.fightError);
    })
  ), { dispatch: false });

  onGetFightContext$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(fightActionTypes.onGetFightContext),
    mergeMap((payload: { champs: FullTwitterUser[] }) => {
      const champId1 = payload.champs[0];
      const champId2 = payload.champs[1];
      return this.twitterUserService.getTweeterUserContext(champId1.id, champId2.id)
        .pipe(
          map((res: FullTwitterUser[]) => {
            const twitterUsers: FullTwitterUser[] = [];
            res.forEach((twitterUser: FullTwitterUser) => {
              const selectedTwitterUser: FullTwitterUser = isChamp1OrChamp2(champId1, champId2, twitterUser.id);
              const newTwitterUser: FullTwitterUser = {
                publicMatrices: selectedTwitterUser.publicMatrices,
                id: selectedTwitterUser.id,
                tweetMatrix: twitterUser.tweetMatrix,
                description: selectedTwitterUser.description,
                hashTag: selectedTwitterUser.hashTag,
                name: selectedTwitterUser.name,
                userName: selectedTwitterUser.userName,
                url: selectedTwitterUser.url,
                entities: selectedTwitterUser.entities,
                location: selectedTwitterUser.location,
                profileImageUrl: selectedTwitterUser.profileImageUrl,
                protected: selectedTwitterUser.protected,
                tweetList: twitterUser.tweetList
              };
              twitterUsers.push(newTwitterUser);
            });
            return fightActionTypes.onFightSuccess({ champs: twitterUsers });
          }),
          catchError(errorResponse => of(fightActionTypes.onFightFailure({ fightError: errorResponse })))
        );
    })
  ));
}
