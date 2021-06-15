import {Component} from '@angular/core';

@Component({
  selector: 'seagull-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  // firebaseUI;
  constructor() {
    // this.firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
    // this.firebaseUI.start('#firebaseui-auth-container', {
    //   signInOptions: [
    //     {
    //       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //       signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
    //     }
    //   ]
    // });
  }
}
