import { Injectable } from '@angular/core';
import { AuthApiModule } from '../auth-api.module';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type RoleResponseItem = {
  id: string,
  name: string,
  description: string
}

type RolesResponse = RoleResponseItem[];

function isValidRolesResponse(response: Object): response is RolesResponse {
  return Array.isArray(response);
}

/**
 * Service for detecting a user's roles.
 */
@Injectable({
  providedIn: AuthApiModule
})
export class UserRoleService {
  public readonly isAdmin$: Observable<boolean> = new Observable<boolean>(observer => {
    let userSubscription = this.auth.user$.subscribe(user => {
      if (!user || user.sub === undefined) {
        observer.next(false);
        return;
      }

      // Request the user's roles by authenticating Auth0's API token.
      let responseSubscription = this.http.get<RolesResponse>(`${environment.auth0.management_api_url}users/${user.sub}/roles`, {
        headers: {
          Authorization: `Bearer ${environment.auth0.management_api_token}`
        }
      }).subscribe(response => {
        for (let role of response) {
          if (role.name === 'admin') {
            observer.next(true);
            return;
          }
        }
      });

      return {
        unsubscribe() {
          userSubscription.unsubscribe();
          responseSubscription.unsubscribe();
        }
      }
    });
  });

  constructor(private http: HttpClient, private auth: AuthService) {

  }
}
