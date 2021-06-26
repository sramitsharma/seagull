import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TwitterUser } from '@core/models/TwitterUser';
import { ErrorHandlerService } from '@core/services/error-handler.service';
import { Store } from '@ngrx/store';
import { champSelector, FightState } from '../../reducers';
import { fightActionTypes } from '../../actions';

@Component({
  selector: 'seagull-tweet-fight',
  templateUrl: './tweet-fight.component.html',
  styleUrls: ['./tweet-fight.component.scss']
})
export class TweetFightComponent implements OnInit, AfterContentInit {
  userNameForm: FormGroup = new FormGroup({});
  isFocused = false;
  user1: TwitterUser | null= null;
  user2: TwitterUser | null= null;

  constructor(private formBuilder: FormBuilder, private errorHandlerService: ErrorHandlerService,
              private store: Store<FightState>) {
  }

  ngAfterContentInit(): void {
    this.store.select(champSelector).subscribe((champs: TwitterUser[]) => {
      if (champs?.length === 2) {
        this.user1 = champs[0];
        this.user2 = champs[1];
        this.userNameForm.setValue({
          user1: this.user1.hashTag,
          user2: this.user2.hashTag
        });
        this.scroll('profileContainer');
      } else {
        this.clearState();
      }
    });
    }

  ngOnInit(): void {
    this.userNameForm = this.formBuilder.group({
      user1: ['', [Validators.required, Validators.minLength(3)]],
      user2: ['', [Validators.required, Validators.minLength(3)]]
    }, {updateOn: 'change'});
  }

  fight(): void {
    if (!this.userNameForm.valid) {
      this.errorHandlerService.handleError(new Error('Be a real champ to start a fight, illegal champ name !!'));
      return;
    }
    const champsToFight = Object.keys(this.userNameForm.value).map(key => this.userNameForm.value[key]);
    this.store.dispatch(fightActionTypes.onFightStart({champNames: champsToFight}));
  }

  onFocusChange(): void {
    this.isFocused = true;
  }

  clearFight(): void {
    this.clearState();
    this.store.dispatch(fightActionTypes.onClearFight());
  }

  private clearState(): void {
    this.user1 = null;
    this.user2 = null;
    this.userNameForm.reset({
      user1: null,
      user2: null
    });
  }

  scroll(element: any){
    // const ele: any = document.getElementById(element);
    // const top = ele?.offsetTop | 579;
    if(document.scrollingElement) {
      document.scrollingElement.scrollTop = 550;
    }
  }
}
