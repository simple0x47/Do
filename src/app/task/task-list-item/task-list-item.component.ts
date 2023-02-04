import { Component, Input } from '@angular/core';
import { Task, TaskStatus } from '../task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  @Input()
  task: Task;

  public TaskStatus = TaskStatus;

  constructor() {
    this.task = new Task();
  }
}
