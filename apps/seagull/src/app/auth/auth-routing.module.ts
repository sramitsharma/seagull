import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from '@seagull/core/gaurds/AuthGuard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: async () => (await import('../home/home.module')).HomeModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: LoginPageComponent
  },
  {
    path: 'auth/register',
    component: SignUpComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
