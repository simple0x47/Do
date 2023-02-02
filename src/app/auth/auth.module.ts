import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
import { AuthModule as Auth0Module } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AuthenticatorComponent
  ],
  imports: [
    CommonModule,

    // Import Auth0's authentication module.
    Auth0Module.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  exports: [
    AuthenticatorComponent
  ]
})
export class AuthModule { }
