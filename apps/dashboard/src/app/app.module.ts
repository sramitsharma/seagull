import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  DashboardDashScreenModule,
  dashboardDashScreenRoutes,
} from '@seagull/dashboard/dash-screen';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [{ path: 'dashboard-dash-screen', children: dashboardDashScreenRoutes }],
      { initialNavigation: 'enabled' }
    ),
    DashboardDashScreenModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
