import { Action, ActionReducer, createReducer, createSelector, on } from '@ngrx/store';
import { homePageActionTypes } from '../actions';

export const homePageFeatureKey = 'HomePage';

export interface HomePageState {
  appName: string | null;
  validCobs: any[];
  selectedCob: Date | null;
}

export const initialState: HomePageState = {
  appName: null,
  validCobs: [],
  selectedCob: null
};

const homePageReducer: ActionReducer<HomePageState> = createReducer(
  initialState,
  on(homePageActionTypes.loadHomePage, (state: HomePageState, action: { appName: string }) => ({
    ...state,
    appName: action.appName
  }))
);

export const homePageFeature = (state: any) => state;

export const validCobSelector = createSelector(
  homePageFeature,
  (state: { HomePage: HomePageState }) => state.HomePage.validCobs
);

export const selectedCobSelector = createSelector(
  homePageFeature,
  (state: { HomePage: HomePageState }) => state.HomePage.selectedCob
);


export const reducer = (state: HomePageState | undefined, action: Action): HomePageState => homePageReducer(state, action);
