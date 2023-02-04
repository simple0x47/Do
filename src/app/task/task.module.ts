import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './task-list/task-list.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { StoreModule } from '@ngrx/store';
import { TASK_FEATURE_KEY, taskReducer } from './task.reducer';

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskListItemComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    StoreModule.forFeature(TASK_FEATURE_KEY, taskReducer)
  ]
})
export class TaskModule { }
