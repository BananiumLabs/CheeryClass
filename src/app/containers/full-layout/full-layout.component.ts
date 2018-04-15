import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent {

  constructor(private auth: AngularFireAuth, private router: Router) {
    setTimeout(function() {
      if (auth.auth.currentUser === null || auth.auth.currentUser.isAnonymous) {
        router.navigate(['/pages/register']);
      }
    }, 1000);
  }
}
