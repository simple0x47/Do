import { Component } from '@angular/core';
import { TaskStatus } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  public TaskStatus = TaskStatus;
}
