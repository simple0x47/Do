import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule as Auth0Module } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LoginButtonComponent } from './login-button/login-button.component';
import { MatButtonModule } from '@angular/material/button';

import { UserActionsComponent } from './user-actions/user-actions.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { AuthApiModule } from '../auth-api/auth-api.module';


@NgModule({
  declarations: [
    ToolbarComponent,
    LoginButtonComponent,
    UserActionsComponent,
    LogoutButtonComponent
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

    AuthApiModule,
    // Import Angular Material modules.
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class AuthModule { }
