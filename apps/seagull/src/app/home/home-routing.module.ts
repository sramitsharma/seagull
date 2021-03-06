import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from '@core/gaurds/AuthGuard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: async () => (await import('../dashboard/dashboard.module')).DashboardModule
      },
      {
        path: 'chat',
        canActivate: [AuthGuard],
        loadChildren: async () => (await import('../chat/chat.module')).ChatModule
      },
      {
        path: 'process',
        canActivate: [AuthGuard],
        loadChildren: async () => (await import('../process/process.module')).ProcessModule
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
