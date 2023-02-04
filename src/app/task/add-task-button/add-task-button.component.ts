import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { create } from '../task.actions';
import { Task } from '../task';

@Component({
  selector: 'app-add-task-button',
  templateUrl: './add-task-button.component.html',
  styleUrls: ['./add-task-button.component.css']
})
export class AddTaskButtonComponent {
  constructor(private store: Store) {

  }

  public addTask() {
    this.store.dispatch(create({ task: new Task() }))
  }
}
