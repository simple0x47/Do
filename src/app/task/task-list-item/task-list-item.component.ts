import { Component, Input } from '@angular/core';
import { Task, TaskStatus } from '../task';
import { Store } from '@ngrx/store';
import { toggleStatus, updateDescription } from '../task.actions';

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
    this.store.dispatch(toggleStatus({ taskId: this.task.id }))
  }

  public setNewDescription(new_description: string): void {
    console.log("new_description: " + new_description);
    this.task = this.task.cloneWithNewDescription(new_description);
    this.store.dispatch(updateDescription({ taskId: this.task.id, taskDescription: new_description }))
  }
}
