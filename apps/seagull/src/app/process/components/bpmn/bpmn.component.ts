import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'seagull-bpmn',
  templateUrl: './bpmn.component.html',
  styleUrls: ['./bpmn.component.scss']
})
export class BpmnComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url =
      'https://anantayarisca.herokuapp.com/engine-rest/process-definition/Process_boiling:9:f8f06d94-77c9-11eb-97cf-00155d007393/xml';
    this.http.get(url).subscribe((data: any) => {
      const pId = data.id;
      const xml = data.bpmn20Xml;
    });
  }

}
