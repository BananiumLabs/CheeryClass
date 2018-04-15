import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
    profilePic: string;

    constructor(private auth: AngularFireAuth) {
      const that = this;
      setTimeout(function() {
        that.profilePic = auth.auth.currentUser.photoURL;
      }, 1000);
    }

    logout(): void {
      this.auth.auth.signOut();
    }
 }
