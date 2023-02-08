import { Injectable } from '@angular/core';
import { AdminApiModule } from './admin-api.module';
import { Observable } from 'rxjs';
import { User } from '../admin/user';
import { HttpClient } from '@angular/common/http';
import { TokenManagementService } from '../auth-api/token-management/token-management.service';

@Injectable({
  providedIn: AdminApiModule
})
export class UserService {

  public getAll$ = new Observable<User[]>((observer) => {
    console.log("token: " + this.tokenManager.accessToken);

    const exampleUsers: User[] = [
      new User("1", "Gabriel Ami", "gamihalachioaie@gmail.com", false),
      new User("2", "Armando Armani", "armando@armani.com", false),
      new User("3", "Vitto Corleone", "vitto@corleone.com", true)
    ];

    observer.next(exampleUsers);

    return {
      unsubscribe() {

      },
    }
  });

  constructor(private client: HttpClient, private tokenManager: TokenManagementService) { }
}
