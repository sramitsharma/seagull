import {createAction, props} from '@ngrx/store';

const loadValidCob = createAction('[Core] Load Valid Cobs');
// const loadValidCobSuccess = createAction('[Core] Load Valid Cobs Success', props<{ validCobs: ValidCob[] }>());
const loadHomePage = createAction('[Home Page] Load HomePage', props<{ appName: string }>());
const onCobSelect = createAction('[Home Page] On COB Select', props<{ selectedCob: Date|null }>());
const loadPortfolioList = createAction('[Home Page] Load Portfolio List', props<{ selectedCob: Date }>());
// const onPortfolioLoadSuccess = createAction('[Home Page] On Portfolio Load Success', props<{ portfolioList: PortfolioGroup[] }>());
const onPortfolioLoadError = createAction('[Home Page] On Portfolio Load Success', props<{ portfolioListError: Error }>());
// const onPortfolioSelect = createAction('[Home Page] On Portfolio Select', props<{ selectedPortfolio: PortfolioGroup }>());

export const homePageActionTypes = {
  // loadValidCobSuccess,
  loadValidCob,
  loadHomePage,
  onCobSelect,
  loadPortfolioList,
  // onPortfolioLoadSuccess,
  onPortfolioLoadError,
  // onPortfolioSelect
};
