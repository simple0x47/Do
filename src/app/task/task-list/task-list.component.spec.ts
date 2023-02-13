import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { StoreModule } from '@ngrx/store';
import { MatExpansionModule } from '@angular/material/expansion';
import { FilterByStatusPipe } from './task-list-filter-by-status';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Task, TaskStatus } from '../task';
import { By } from '@angular/platform-browser';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { ClearCompletedTasksButtonComponent } from '../clear-completed-tasks-button/clear-completed-tasks-button.component';
import { MatDialogModule } from '@angular/material/dialog';

function generateTestTasks(): Map<string, Task> {
  let testTasks = new Map<string, Task>();
  testTasks.set("1", new Task("1", TaskStatus.PENDING, "description 1"));
  testTasks.set("2", new Task("2", TaskStatus.PENDING, "description 2"));
  testTasks.set("3", new Task("3", TaskStatus.DONE, "description 3"));

  return testTasks;
}

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TaskListComponent,
        TaskListItemComponent,
        FilterByStatusPipe,
        ClearCompletedTasksButtonComponent
      ],
      imports: [
        MatExpansionModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDividerModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatDialogModule,
        StoreModule.forRoot()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list pending tasks', () => {
    component.tasks$ = of(generateTestTasks());
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css(".tasks-list")).children.length).toBe(2);
  });

  it('should list completed tasks', () => {
    component.tasks$ = of(generateTestTasks());
    component.showTasksWithStatus = TaskStatus.DONE;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css(".tasks-list")).children.length).toBe(1);
  });
});
