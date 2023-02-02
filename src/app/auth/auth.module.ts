import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule as Auth0Module } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LoginButtonComponent } from './login-button/login-button.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ToolbarComponent,
    LoginButtonComponent
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

    // Import Angular Material modules.
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class AuthModule { }
