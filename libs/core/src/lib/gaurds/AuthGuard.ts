import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

import firebase from 'firebase/app';
import { ErrorLogService } from '../services/error-log.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private errorService: ErrorLogService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
        if (user) {
          resolve(true);
        } else {
          this.errorService.logError(new Error('User Not Logged In'));
          this.router.navigate(['auth']).then();
          reject(false);
        }
      });
    }));
  }
}
