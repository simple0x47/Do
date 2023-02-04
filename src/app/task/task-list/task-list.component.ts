import { Component, Input } from '@angular/core';
import { Task, TaskStatus } from '../task';
import { Observable, filter } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectTasks } from '../task.selector';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input()
  title: string;

  @Input()
  showTasksWithStatus: TaskStatus;

  tasks$: Observable<Map<string, Task>>;

  constructor(private store: Store) {
    this.title = '';
    this.showTasksWithStatus = TaskStatus.PENDING;
    this.tasks$ = this.store.select(selectTasks).pipe(filter(tasks => {
      if (tasks === undefined) {
        return false;
      }

      for (const task of tasks.values()) {
        if (task.status === this.showTasksWithStatus) {
          return true;
        }
      }

      return false;
    }));
  }
}
