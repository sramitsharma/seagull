import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'seagull-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  title = 'bpmn-js-angular';
  // diagramUrl = '/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
  diagramUrl: string | null = '';
  // '/engine-rest/process-definition/Process_boiling:9:f8f06d94-77c9-11eb-97cf-00155d007393/xml';
  importError?: Error;
  columnDefs = [
    {field: 'jobDate'},
    {field: 'haveEnoughCups'},
    {field: 'haveMilk'},
    {field: 'haveSugar'},
    {field: 'haveTeaLeaves'},
    {field: 'haveBurner'},
    {field: 'personDied'}
  ];
  range = new FormGroup({
    start: new FormControl()
  });
  rowData = [];
  isHandset = false;
  isHandset$: Observable<boolean>;

  constructor(private http: HttpClient, private breakpointObserver: BreakpointObserver) {
    this.http.get('https://anantayarisca.herokuapp.com/tea/getTea').subscribe((data: any) => {
      this.rowData = data;
    });
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => {
          return result.matches;
        }),
        shareReplay()
      );
    this.isHandset$.subscribe((result: boolean) => {
      this.isHandset = result;
    });
  }

  handleImported(event: any): void {

    const {
      type,
      error,
      warnings
    } = event;

    if (type === 'success') {
      console.log(`Rendered diagram (%s warnings)`, warnings.length);
    }

    if (type === 'error') {
      console.error('Failed to render diagram', error);
    }

    this.importError = error;
  }


  triggerJob(): void {
    if (this.range.valid) {
      this.diagramUrl = null;
      let startId = null;
      const startDate = this.range.value.start;
      if(!startDate) alert('Please select Date');
      const modifiedDate = (startDate.getDate() < 10 ? ('0' + startDate.getDate()) : startDate.getDate())
        + '/0' +
        (startDate.getMonth() + 1)
        + '/'
        + startDate.getFullYear();

      this.rowData.forEach((data: any) => {
        if (data.jobDate === modifiedDate) {
          startId = data.taskId;
        }
      });
      const isVertical = this.isHandset;
      const serverPath = 'https://anantayarisca.herokuapp.com';
      const startDates = startId;
      this.http.post('https://anantayarisca.herokuapp.com/camunda/startJob', {
        isVertical,
        startDate: startDates,
        serverPath
      })
        .subscribe((res: any) => {
          this.diagramUrl = '/engine-rest/process-definition/'
            + res.processDefinitionId
            + '/xml';
        });
    }
  }
}
