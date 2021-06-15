import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthRoutingModule } from './auth-routing.module';
import { authFeatureKey, authReducer } from './reducers/auth.reducer';
import { AuthEffect } from './effects/auth.effect';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CruxModule } from '../crux/crux.module';

@NgModule({
  declarations: [LoginPageComponent, SignUpComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    CruxModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffect]),
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
