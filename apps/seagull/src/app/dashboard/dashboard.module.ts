import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CruxModule } from '../crux/crux.module';
import { TweetFightComponent } from './components/tweet-fight/tweet-fight.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { fightFeatureKey, fightReducer } from './reducers';
import { FightEffect } from './effects/fight-effect';


@NgModule({
  declarations: [
    DashboardComponent,
    TweetFightComponent
  ],
  imports: [
    DashboardRoutingModule,
    CruxModule,
    StoreModule.forFeature(fightFeatureKey, fightReducer),
    EffectsModule.forFeature([FightEffect]),
  ]
})
export class DashboardModule { }
