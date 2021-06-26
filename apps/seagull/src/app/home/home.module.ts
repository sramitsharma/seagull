import { NgModule } from '@angular/core';
import { homePageFeatureKey, reducer } from './reducers/home-page.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CobDatePickerComponent } from './components/cob-date-picker/cob-date-picker.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeRoutingModule } from './home-routing.module';
import { CruxModule } from '../crux/crux.module';
import { PortfolioSelectComponent } from './components/portfolio-select/portfolio-select.component';

@NgModule({
  declarations: [
    HomePageComponent, CobDatePickerComponent,
    GlobalSearchComponent, SearchDialogComponent,
    ToolbarComponent, PortfolioSelectComponent],
  exports: [],
  imports: [
    HomeRoutingModule,
    CruxModule,
    EffectsModule.forFeature([]),
    StoreModule.forFeature(homePageFeatureKey, reducer)
  ]
})
export class HomeModule {
}
