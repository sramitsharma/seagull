import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  serverUrl = 'environment.serverUri';

  constructor(private httpClient: HttpClient) {
  }

}
