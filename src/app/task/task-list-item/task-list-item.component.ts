import { Component, Input } from '@angular/core';
import { Task, TaskStatus } from '../task';
import { Store } from '@ngrx/store';
import { toggleStatus } from '../task.actions';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  @Input()
  task: Task;

  public TaskStatus = TaskStatus;

  constructor(private store: Store) {
    this.task = new Task();
  }

  public toggleStatus(): void {
    this.task = this.task.cloneWithToggledStatus();
    this.store.dispatch(toggleStatus({ task_id: this.task.id }))
  }
}
