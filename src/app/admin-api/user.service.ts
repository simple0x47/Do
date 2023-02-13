import { Injectable } from '@angular/core';
import { AdminApiModule } from './admin-api.module';
import { Observable } from 'rxjs';
import { User } from '../admin/user';
import { HttpClient } from '@angular/common/http';
import { ActionType, TaskAction } from '../task-action';

@Injectable({
  providedIn: AdminApiModule
})
export class UserService {

  public getAll$ = new Observable<User[]>((observer) => {
    const exampleUsers: User[] = [
      new User("1", "Gabriel Ami", "gamihalachioaie@gmail.com", false),
      new User("2", "Armando Armani", "armando@armani.com", false, [new TaskAction(ActionType.CREATE, "AFG"), new TaskAction(ActionType.TOGGLE_STATUS, "TEST"), new TaskAction(ActionType.CLEAR_DONE, "ABCD")]),
      new User("3", "Vitto Corleone", "vitto@corleone.com", true, [new TaskAction(ActionType.CREATE, "")])
    ];

    observer.next(exampleUsers);

    return {
      unsubscribe() {

      },
    }
  });

  constructor(private client: HttpClient) { }
}
