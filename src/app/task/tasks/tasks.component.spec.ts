import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { StoreModule } from '@ngrx/store';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { MatExpansionModule } from '@angular/material/expansion';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddTaskButtonComponent } from '../add-task-button/add-task-button.component';
import { TranslateButtonComponent } from '../translate-button/translate-button.component';
import { TaskTranslatableAdapter } from '../task-translatable-adapter';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterByStatusPipe } from '../task-list/task-list-filter-by-status';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ClearCompletedTasksButtonComponent } from '../clear-completed-tasks-button/clear-completed-tasks-button.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TasksComponent,
        TaskListComponent,
        AddTaskButtonComponent,
        TranslateButtonComponent,
        FilterByStatusPipe,
        ClearCompletedTasksButtonComponent
      ],
      imports: [
        MatExpansionModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatIconModule,
        StoreModule.forRoot()
      ],
      providers: [
        {
          provide: AuthService, useValue: {
            user$: of(null)
          }
        },
        { provide: TaskTranslatableAdapter, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
