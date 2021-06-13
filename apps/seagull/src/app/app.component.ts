import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'seagull-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'seagull';
  dataToDisplay: any;
  constructor(private http: HttpClient) {
    this.http.get(environment.serverUrl + '/tea/getTea').subscribe(data => {
      this.dataToDisplay = data;
    });
  }
}
