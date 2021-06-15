import {Action, ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
// store composes your map of reducers into a single reducer.
import {environment} from '../../../environments/environment';
import {localStorageSync} from 'ngrx-store-localstorage';

// Take a reducer, do whatever you need and return a new reducer / reducer middleware (MetaReducer)
const debug = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => (state: AppState | undefined, action: Action) => {
  return reducer(state, action);
};

// Application level state
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {
}

// ActionReducerMap is a map of all the reducers
export const reducers: ActionReducerMap<AppState> = {};


const localStorageSyncReducer = (reducer: ActionReducer<any>): ActionReducer<any> =>
  localStorageSync({keys: ['HomePage', 'AuthKey', 'Fight'], rehydrate: true})(reducer);

// MetaReducers are the hooks into the action -> reducer pipeline, which allow to preprocess actions before normal reducers are invoked
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug, localStorageSyncReducer] : [];
