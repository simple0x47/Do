import { Injectable } from '@angular/core';
import { AdminApiModule } from './admin-api.module';
import { Observable } from 'rxjs';
import { User } from '../admin/user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TokenManagementService } from '../auth-api/token-management/token-management.service';

@Injectable({
  providedIn: AdminApiModule
})
export class UserService {

  public getAll$ = new Observable<User[]>((observer) => {
    const accessToken = this.tokenManager.accessToken;

    // User not logged in.
    if (accessToken.length === 0) {
      return {
        unsubscribe() { }
      }
    }

    const requestSubscription = this.client.get<User[]>(`${environment.user_api.url}/get_all`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).subscribe(users => {
      observer.next(users);
    });

    return {
      unsubscribe() {
        requestSubscription.unsubscribe();
      },
    }
  });

  constructor(private client: HttpClient, private tokenManager: TokenManagementService) { }
}
