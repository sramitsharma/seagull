import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FullTwitterUser } from '@core/models/TwitterUser';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterUserService {
  nodeServerUrl = environment.serverUrl;

  constructor(private httpClient: HttpClient) {
  }

  getTweeterMultipleUsers(users: string[]): Observable<FullTwitterUser[]> {
    return this.httpClient.post<FullTwitterUser[]>(`${this.nodeServerUrl}/twitter/getMultipleUsers`, users);
  }

  getTweeterUserContext(champId1: number, champId2: number): Observable<FullTwitterUser[]> {
    const userIds = [champId1, champId2];
    return this.httpClient.post<FullTwitterUser[]>(`${this.nodeServerUrl}/twitter/getTweetsByUserId?userId=${champId1}`, userIds);
  }

}
