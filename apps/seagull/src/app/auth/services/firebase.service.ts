import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { from, Observable } from 'rxjs';
import { User } from '@seagull/core/models/User';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseSignUp(userToSignUp: User): Observable<firebase.auth.UserCredential> {
    const { email, password } = userToSignUp;
    return from(firebase.auth()
      .createUserWithEmailAndPassword(email, password));
  }

  firebaseSignOut(): Observable<any> {
    return from(firebase.auth().signOut());
  }

  firebaseLogin(userToLogin: User): Observable<firebase.auth.UserCredential> {
    return from(firebase.auth().signInWithEmailAndPassword(userToLogin.email, userToLogin.password));
  }
}
