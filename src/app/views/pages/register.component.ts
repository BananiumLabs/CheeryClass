import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(public afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) { }

  login() {
    const that = this;
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
      const userData = that.afs.collection('users');
      userData.add({teacher: false});

      that.router.navigate(['/dashboard']);
    });
  }
}
