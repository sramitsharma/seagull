import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from '@seagull/core/gaurds/AuthGuard';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./../dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'chat',
        canActivate: [AuthGuard],
        loadChildren: () => import('./../chat/chat.module').then(m => m.ChatModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
