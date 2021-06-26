import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuard } from '@core/gaurds/AuthGuard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: SignUpComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
