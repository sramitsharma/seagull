import { createAction, props } from '@ngrx/store';
import { FullTwitterUser, TwitterUser } from '@core/models/TwitterUser';

const onFightStart = createAction('[Fight]On Fight Start', props<{ champNames: string[] }>());
const onFightSuccess = createAction('[Fight]On Fight Success', props<{ champs: FullTwitterUser[] }>());
const onFightFailure = createAction('[Fight]On Fight Failure', props<{ fightError: any }>());
const onGetFightContext = createAction('[Fight]On Fight Get Context', props<{ champs: FullTwitterUser[] }>());
const onGetFightContextSuccess = createAction('[Fight]On Fight Get Context Success',
                      props<{ champs: TwitterUser[] }>());
const onGetFightContextError = createAction('[Fight]On Fight Context Error', props<{ fightError: any }>());
const onClearFight = createAction('[Fight]On Fight Clear');

export const fightActionTypes = {
  onFightStart,
  onFightSuccess,
  onFightFailure,
  onGetFightContext,
  onGetFightContextSuccess,
  onGetFightContextError,
  onClearFight
};
