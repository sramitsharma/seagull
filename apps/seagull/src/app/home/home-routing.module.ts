import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from '@seagull/core/gaurds/AuthGuard';
import { LoginPageComponent } from '../auth/components/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: 'dashboard',
      //   canActivate: [AuthGuard],
      //   loadChildren: async () => (await import('../dashboard/dashboard.module')).DashboardModule
      // },
      // {
      //   path: 'chat',
      //   canActivate: [AuthGuard],
      //   loadChildren: async () => (await import('../chat/chat.module')).ChatModule
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
