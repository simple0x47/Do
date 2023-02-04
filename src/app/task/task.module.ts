import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './task-list/task-list.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { StoreModule } from '@ngrx/store';
import { TASK_FEATURE_KEY, taskReducer } from './task.reducer';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddTaskButtonComponent } from './add-task-button/add-task-button.component';
import { FilterByStatusPipe } from './task-list/task-list-filter-by-status';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskListItemComponent,
    AddTaskButtonComponent,
    FilterByStatusPipe
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    StoreModule.forFeature(TASK_FEATURE_KEY, taskReducer)
  ]
})
export class TaskModule { }
