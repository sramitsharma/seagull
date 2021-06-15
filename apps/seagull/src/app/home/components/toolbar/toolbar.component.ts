import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SeagullMenu } from '@seagull/core/models/SeagullMenu';

@Component({
  selector: 'seagull-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isOpen = false;
  componentList: SeagullMenu[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.componentList = [
      {
        title: 'Dashboard',
        tagId: 'dashboard',
        route: 'home/dashboard'
      }, {
        title: 'Favorite',
        tagId: 'favorite',
        route: 'home/favorite'
      }, {
        title: 'Share',
        tagId: 'share',
        route: 'home/share'
      }, {
        title: 'Chat',
        tagId: 'sms',
        route: 'home/chat'
      }, {
        title: 'Video',
        tagId: 'voice_chat',
        route: 'home/voice'
      }, {
        title: 'Admin',
        tagId: 'person',
        route: 'home/person'
      }, {
        title: 'Settings',
        tagId: 'settings',
        route: 'home/settings'
      }
    ];
  }

  toggleNav(): void {
    this.isOpen = !this.isOpen;
  }
}
