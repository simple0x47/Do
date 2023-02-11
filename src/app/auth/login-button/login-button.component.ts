import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  constructor(public auth: AuthService) { }

  public loginWithRedirect() {
    this.auth.loginWithRedirect({
      authorizationParams: {
        audience: environment.auth0.audience
      }
    })
  }
}
