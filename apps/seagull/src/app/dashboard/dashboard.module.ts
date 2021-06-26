import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CruxModule } from '../crux/crux.module';
import { TweetFightComponent } from './components/tweet-fight/tweet-fight.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { fightFeatureKey, fightReducer } from './reducers';
import { FightEffect } from './effects/fight-effect';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    DashboardComponent,
    TweetFightComponent
  ],
  imports: [
    DashboardRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    CruxModule,
    StoreModule.forFeature(fightFeatureKey, fightReducer),
    EffectsModule.forFeature([FightEffect]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
