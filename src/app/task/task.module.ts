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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ClearCompletedTasksButtonComponent } from './clear-completed-tasks-button/clear-completed-tasks-button.component';
import { ClearConfirmationDialogComponent } from './clear-confirmation-dialog/clear-confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'
import { EffectsModule } from '@ngrx/effects';
import { HydrationEffects } from './hydration.effects';
import { hydrationMetaReducer } from './hydration.meta.reducer';
import { TaskApiModule } from '../task-api/task-api.module';
import { TaskEffects } from './task.effects';
import { TaskTranslatableAdapter } from './task-translatable-adapter';
import { TranslationModule } from '../translation/translation.module';
import { TranslateButtonComponent } from './translate-button/translate-button.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskListItemComponent,
    AddTaskButtonComponent,
    FilterByStatusPipe,
    ClearCompletedTasksButtonComponent,
    ClearConfirmationDialogComponent,
    TranslateButtonComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    StoreModule.forFeature(TASK_FEATURE_KEY, taskReducer, { metaReducers: [hydrationMetaReducer] }),
    EffectsModule.forFeature(HydrationEffects, TaskEffects),
    TaskApiModule,
    TranslationModule
  ],
  providers: [
    TaskTranslatableAdapter
  ]
})
export class TaskModule { }
