import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { PortfolioService } from '../services/portfolio.service';

@Injectable()
export class PortfolioEffect {

  constructor(private action$: Actions, private portfolioService: PortfolioService) {
  }
}
