import { Injectable } from '@angular/core';
import { AuthApiModule } from '../auth-api.module';
import { AuthService } from '@auth0/auth0-angular';
import { first } from 'rxjs';

@Injectable({
  providedIn: AuthApiModule
})
export class TokenManagementService {
  private _accessToken: string = "";

  public get accessToken(): string {
    return this._accessToken;
  }

  constructor(private auth: AuthService) {
    auth.getAccessTokenSilently().pipe(first()).subscribe(token => {
      this._accessToken = token;
    });
  }
}
