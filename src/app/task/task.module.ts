import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './task-list/task-list.component';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class TaskModule { }
