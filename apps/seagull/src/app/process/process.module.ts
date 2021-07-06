import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './components/process/process.component';
import { BpmnComponent } from './components/bpmn/bpmn.component';
import { ChatComponent } from './components/chat/chat.component';
import { DiagramComponent } from './components/diagram/diagram.component';
import { CruxModule } from '../crux/crux.module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    ProcessComponent,
    BpmnComponent,
    ChatComponent,
    DiagramComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents(),
    CruxModule,
    ProcessRoutingModule
  ]
})
export class ProcessModule { }
