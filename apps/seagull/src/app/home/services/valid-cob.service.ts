import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidCobService {
  serverUrl = 'environment.serverUri';

  constructor(private httpclient: HttpClient) {
  }

  getValidCob(): Observable<any[]> {
    return this.httpclient.get<any[]>(`${this.serverUrl}validCobs`);
  }
}
