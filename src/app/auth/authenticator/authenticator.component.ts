import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent {
  constructor(public auth: AuthService) { }

  ngOnInit() {
    // First of all, authenticate the user.
    let authenticationSubscription = this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.auth.loginWithRedirect();
      }

      authenticationSubscription.unsubscribe();
    });
  }
}
