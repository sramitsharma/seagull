import { NgModule } from '@angular/core';
import { homePageFeatureKey, reducer } from './reducers/home-page.reducer';

import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CobDatePickerComponent } from './components/cob-date-picker/cob-date-picker.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeRoutingModule } from './home-routing.module';
import { CruxModule } from '../crux/crux.module';
import { PortfolioSelectComponent } from './components/portfolio-select/portfolio-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent, CobDatePickerComponent,
    AppNavbarComponent, DrawerComponent, GlobalSearchComponent, SearchDialogComponent, ToolbarComponent, PortfolioSelectComponent],
  exports: [
    AppNavbarComponent
  ],
  imports: [
    CommonModule,
    CruxModule,
    HomeRoutingModule,
    EffectsModule.forFeature([]),
    StoreModule.forFeature(homePageFeatureKey, reducer),
    ReactiveFormsModule
  ]
})
export class HomeModule {
}
