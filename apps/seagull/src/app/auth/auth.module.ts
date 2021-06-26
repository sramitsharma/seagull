import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthRoutingModule } from './auth-routing.module';
import { authFeatureKey, authReducer } from './reducers/auth.reducer';
import { AuthEffect } from './effects/auth.effect';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CruxModule } from '../crux/crux.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [LoginPageComponent, SignUpComponent],
  imports: [
    AuthRoutingModule,
    HomeModule,
    CruxModule.forRoot(),
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffect])
  ]
})
export class AuthModule {
}
