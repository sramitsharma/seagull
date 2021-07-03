import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CruxModule } from '../crux/crux.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { fightFeatureKey, fightReducer } from './reducers';
import { FightEffect } from './effects/fight-effect';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TweetFightComponent } from './components/tweet-fight/tweet-fight.component';
import { CompareChartComponent } from './components/compare-chart/compare-chart.component';
import { Chart1Component } from './components/chart1/chart1.component';
import { ChartsModule } from 'ng2-charts';
import { ChampComponent } from './components/champ/champ.component';
import { Chart2Component } from './components/chart2/chart2.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    DashboardComponent,
    TweetFightComponent,
    CompareChartComponent,
    Chart1Component,
    ChampComponent,
    Chart2Component
  ],
  imports: [
    DashboardRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    CruxModule,
    StoreModule.forFeature(fightFeatureKey, fightReducer),
    EffectsModule.forFeature([FightEffect]),
    ChartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
