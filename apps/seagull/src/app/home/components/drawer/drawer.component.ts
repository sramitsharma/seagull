import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { SeagullMenu } from '@seagull/core/models/SeagullMenu';


@Component({
  selector: 'seagull-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
  componentList: SeagullMenu[];

  constructor(private router: Router) {
    this.componentList = [];
  }

  onNavigationIconClicked(component: SeagullMenu): void {
    switch (component.tagId) {
      case 'favorite':
        this.router.navigate(['/favorite']).then();
        break;
      case 'share':
        this.router.navigate(['/share']).then();
        break;
      case 'sms':
        this.router.navigate(['/chat']).then();
        break;
      case 'voice_chat':
        this.router.navigate(['/voice']).then();
        break;
      case 'person':
        this.router.navigate(['/person']).then();
        break;
      case 'settings':
        this.router.navigate(['/settings']).then();
        break;
      default:
        this.router.navigate(['/dashboard']).then();
        break;
    }
  }
}
