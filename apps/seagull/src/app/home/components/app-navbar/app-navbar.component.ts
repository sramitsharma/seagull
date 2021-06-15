import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

import {Store} from '@ngrx/store';
import { AuthState } from '../../../auth/reducers/auth.reducer';
import { HomePageState } from '../../reducers/home-page.reducer';
import { authActionTypes } from '../../../auth/actions';

@Component({
  selector: 'seagull-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent {
  title$: Observable<string>;
  userName = 'Amit Sharma';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authStore: Store<AuthState>,
              private homePageStore: Store<HomePageState>) {
    this.title$ = homePageStore.select((state: HomePageState) => {
      // @ts-ignore
      return state['HomePage'].appName;
    });
  }

  logout(): void {
    this.authStore.dispatch(authActionTypes.onSignOut());
  }
}
