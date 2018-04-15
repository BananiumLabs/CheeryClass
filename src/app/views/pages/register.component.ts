import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  login() {
    const that = this;
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
      that.router.navigate(['/dashboard']);
    });
  }
}
