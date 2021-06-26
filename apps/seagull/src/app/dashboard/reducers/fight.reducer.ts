import { TwitterUser } from '@core/models/TwitterUser';
import { Action, ActionReducer, createReducer, createSelector, on } from '@ngrx/store';
import { SeagullError } from '@core/models/SeagullError';
import { fightActionTypes } from '../actions';

export const fightFeatureKey = 'Fight';

export interface FightState {
  champNames: string[];
  champs: TwitterUser[];
  fightError?: SeagullError | null;
}

export const initialFightState: FightState = {
  champNames: [],
  champs: [],
  fightError: null
};

export const fightPageReducer: ActionReducer<FightState> = createReducer(
  initialFightState,
  on(fightActionTypes.onFightStart, (state: FightState, action: { champNames: string[] }) => ({
    ...state,
    champNames: action.champNames,
    fightError: null
  })),
  on(fightActionTypes.onFightSuccess, (state: FightState, action: { champs: TwitterUser[] }) => ({
    ...state,
    champs: action.champs,
    fightError: null
  })),
  on(fightActionTypes.onFightFailure, (state: FightState, action: { fightError: SeagullError }) => ({
    ...state,
    champNames: [],
    fightError: action.fightError
  })),
  on(fightActionTypes.onClearFight, () => (
    initialFightState
  ))
);

export const fightPageFeature = (state: any) => state;
export const champSelector = createSelector(
  fightPageFeature,
  (state: {Fight: FightState}) => state.Fight.champs
);

export const fightErrorSelector = createSelector(
  fightPageFeature,
  (state: {Fight: FightState}) => state.Fight.fightError
)

export const fightReducer = (state: FightState | undefined, action: Action): FightState => fightPageReducer(state, action);

