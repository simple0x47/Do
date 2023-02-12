import { Injectable } from '@angular/core';
import { TaskApiModule } from '../task-api.module';
import { Task } from 'src/app/task/task';
import { HttpClient } from '@angular/common/http';
import { Observable, first } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: TaskApiModule
})
export class TasksSnapshotService {
  public getSnapshot$ = new Observable<Task[]>((observer) => {
    const tokenSubscription = this.auth.getAccessTokenSilently({
      authorizationParams: {
        audience: environment.auth0.audience
      }
    }).pipe(first()).subscribe((token) => {
      this.client.get<Task[]>(`${environment.task_api.url}/get_snapshot`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).subscribe((snapshot) => {
        observer.next(snapshot);
      });
    });

    return {
      unsubscribe() {
        tokenSubscription.unsubscribe();
      },
    }
  });

  constructor(private client: HttpClient, private auth: AuthService) {

  }
}
