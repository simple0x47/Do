import { Injectable } from '@angular/core';
import { AdminApiModule } from './admin-api.module';
import { Observable, first } from 'rxjs';
import { User } from '../admin/user';
import { HttpClient } from '@angular/common/http';
import { TaskAction } from '../task-action';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: AdminApiModule
})
export class UserService {

  public getAll$ = new Observable<User[]>((observer) => {

    const tokenSubscription = this.auth.getAccessTokenSilently({
      authorizationParams: {
        audience: environment.auth0.audience
      }
    }).pipe(first()).subscribe((token) => {
      this.client.get<User[]>(`${environment.user_api.url}/get_all`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).subscribe((users) => {
        this.regenerateUsersActions(users);

        observer.next(users);
      });
    });

    return {
      unsubscribe() {
        tokenSubscription.unsubscribe();
      },
    }
  });

  constructor(private client: HttpClient, private auth: AuthService) { }

  /**
   * Used for adding the methods to the users' actions prototypes, since 
   * these methods are not defined when the users are parsed from the JSON response.
   * @param users
   */
  private regenerateUsersActions(users: User[]) {
    for (const user of users) {
      user.actions = this.regenerateActions(user.actions);
    }
  }

  private regenerateActions(actions: TaskAction[]): TaskAction[] {
    const regeneratedActions: TaskAction[] = [];

    for (const action of actions) {
      const regeneratedAction = new TaskAction(action.action, action.payload);
      regeneratedAction.timestamp = action.timestamp;

      regeneratedActions.push(regeneratedAction);
    }

    return regeneratedActions;
  }
}
