import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import { HomePageState } from '../../reducers/home-page.reducer';

@Component({
  selector: 'seagull-portfolio-select',
  templateUrl: './portfolio-select.component.html',
  styleUrls: ['./portfolio-select.component.scss']
})
export class PortfolioSelectComponent {

  constructor(private homePageStore: Store<HomePageState>) {
  }

  onParentHOSelect(): void {
    // this.homePageStore.dispatch(homePageActionTypes.onPortfolioSelect({selectedPortfolio}));
  }
}
