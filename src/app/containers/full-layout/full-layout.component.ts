import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent {

  visible = false;
  userDataSnapshot;

  constructor(private auth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
    const that = this;
    setTimeout(function() {
      if (auth.auth.currentUser === null || auth.auth.currentUser.isAnonymous) {
        router.navigate(['/pages/register']);
  
        const userData = that.afs.collection('users/' + auth.auth.currentUser.uid);
  
        userData.valueChanges().subscribe(data => (that.userDataSnapshot = data));
        console.log(that.userDataSnapshot);
      }
    }, 1000);
  }
}
