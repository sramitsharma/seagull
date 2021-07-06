import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';

/**
 * You may include a different variant of BpmnJS:
 *
 * bpmn-viewer  - displays BPMN diagrams without the ability
 *                to navigate them
 * bpmn-modeler - bootstraps a full-fledged BPMN editor
 */

// import * as BpmnJS from 'bpmn-js/dist/bpmn-viewer.production.min.js';
import { EMPTY, from, Observable, Subscription } from 'rxjs';
import { ActivityNotifierService } from '../../services/activity-notifier.service';
import Viewer from 'bpmn-js';

@Component({
  selector: 'seagull-diagram',
  templateUrl: './diagram.component.html',
  styles: [
    `
      .diagram-container {
        height: 100%;
        width: 100%;
      }
    `
  ]
})
export class DiagramComponent implements AfterContentInit, OnChanges, OnDestroy {
  private bpmnJS: Viewer;
  private toggle = false;
  @ViewChild('ref', {static: true}) private el: ElementRef | undefined;
  @Output() private importDone: EventEmitter<any> = new EventEmitter();

  @Input() public url: string | undefined;

  constructor(private http: HttpClient, private activityService: ActivityNotifierService, ) {
    this.activityService.connect().subscribe((key: any) => {
      this.bpmnJS.get('canvas').addMarker(key, 'highlight');
    });

    this.bpmnJS = new Viewer({
      width: '89vw',
      height: '82vh',
      textRenderer: {
        defaultStyle: {
          fontFamily: '"Virgil"',
          fontWeight: 'normal',
          fontSize: 16,
          lineHeight: 1.1,
          color: 'white'
        },
        externalStyle: {
          fontSize: 15,
          lineHeight: 1.1
        }
      }
    });

    this.bpmnJS.on('import.done', ({error}: any) => {
      if (!error) {
        this.bpmnJS.get('canvas').zoom('fit-viewport');
        const container = document.getElementById('js-drop-zone');
        if (container) {
          container.classList.add('with-diagram');
        }

        this.bpmnJS.get('canvas').addMarker('goToKitchenId', 'highlight');
      }
    });
  }

  ngAfterContentInit(): void {
    this.bpmnJS.attachTo(this.el?.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // re-import whenever the url changes
    if (changes.url) {
      this.loadUrl(changes.url.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.bpmnJS.destroy();
  }

  /**
   * Load diagram from URL and emit completion event
   */
  loadUrl(url: string): Subscription {
    /*const h: HttpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });*/

    return (
      this.http.get(url, {responseType: 'text'}).pipe(
        switchMap((xml: string) => this.importDiagram(xml)),
        map((result: any) => {
          if(result){
            return result.warnings;
          }
          return EMPTY;
        }),
      ).subscribe(
        (warnings) => {
          this.importDone.emit({
            type: 'success',
            warnings
          });
        },
        (err) => {
          this.importDone.emit({
            type: 'error',
            error: err
          });
        }
      )
    );
  }

  /**
   * Creates a Promise to import the given XML into the current
   * BpmnJS instance, then returns it as an Observable.
   *
   * @see https://github.com/bpmn-io/bpmn-js-callbacks-to-promises#importxml
   */
  private importDiagram(xml: string): any {
    const parsedXML = JSON.parse(xml).bpmn20Xml;
    this.bpmnJS.importXML(parsedXML, (res) => {
      if(res) {
        return from(res);
      } else {
        return from([]);
      }
    })

  }

  private toggleMarker(): void {

    this.toggle = !this.toggle;
    if (this.toggle) {
      this.bpmnJS.get('canvas').removeMarker('Activity_washCup', 'highlight');
      this.bpmnJS.get('canvas').addMarker('Activity_milkFromNeighbour', 'highlight');
    } else {
      this.bpmnJS.get('canvas').removeMarker('Activity_milkFromNeighbour', 'highlight');
      this.bpmnJS.get('canvas').addMarker('Activity_washCup', 'highlight');
    }

  }

}
