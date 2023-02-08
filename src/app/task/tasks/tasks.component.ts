import { Component } from '@angular/core';
import { TaskStatus } from '../task';
import { Store } from '@ngrx/store';
import { AuthService } from '@auth0/auth0-angular';
import { loadSnapshot } from '../task.actions';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  public TaskStatus = TaskStatus;

  constructor(private store: Store, private auth: AuthService) {
    this.auth.user$.pipe(distinctUntilChanged()).subscribe((user) => {
      // Only trigger loadSnapshot whenever a user logs in.
      if (!user) {
        return;
      }

      if (!user.sub) {
        return;
      }

      this.store.dispatch(loadSnapshot());
    });
  }
}
