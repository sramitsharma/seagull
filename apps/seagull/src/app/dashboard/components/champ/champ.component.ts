import { Component, Input } from '@angular/core';
import { TwitterUser } from '@core/models/TwitterUser';

@Component({
  selector: 'seagull-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.scss']
})
export class ChampComponent {

  @Input() user: TwitterUser | null = null;

  tweetUser(userInfo: TwitterUser): void {
    const saluteText = 'Hi ' + userInfo.name;
    const twitterHandle = userInfo.hashTag;
    window.open(`https://twitter.com/share?text=${saluteText}, checkout this awesome site&url=https://mramit.site&hashtags=mramit,segull,${twitterHandle}`);
  }
}
