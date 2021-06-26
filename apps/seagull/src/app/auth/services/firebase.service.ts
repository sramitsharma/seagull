import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { from, Observable } from 'rxjs';
import { User } from '@core/models/User';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseSignUp(userToSignUp: User): Observable<firebase.default.auth.UserCredential> {
    const { email, password } = userToSignUp;
    return from(firebase.default.auth()
      .createUserWithEmailAndPassword(email, password));
  }

  firebaseSignOut(): Observable<any> {
    return from(firebase.default.auth().signOut());
  }

  firebaseLogin(userToLogin: User): Observable<firebase.default.auth.UserCredential> {
    return from(firebase.default.auth().signInWithEmailAndPassword(userToLogin.email, userToLogin.password ));
  }
}
