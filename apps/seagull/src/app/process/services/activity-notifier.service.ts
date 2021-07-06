import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityNotifierService {
  connect(): Observable<any> {
    return Observable.create((observer: { next: (arg0: any) => any; error: (arg0: Event) => any; }) => {
      const eventSource = new EventSource('https://anantayarisca.herokuapp.com/camunda/streamActivity');
      eventSource.onmessage = x => observer.next(x.data);
      eventSource.onerror = x => observer.error(x);
      return () => {
        eventSource.close();
      };
    });
  }
}
