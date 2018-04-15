import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
    profilePic: string;

    constructor(private auth: AngularFireAuth, private router: Router) {
      const that = this;
      setTimeout(function() {
        that.profilePic = auth.auth.currentUser.photoURL;
      }, 1000);
    }

    logout(): void {
      const that = this;
      this.auth.auth.signOut().then(() => {that.router.navigate(['/pages/register'])});
    }
 }
