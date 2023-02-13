import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRow, MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { User } from '../user';
import { ActionType, TaskAction } from 'src/app/task-action';
import { By } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [
        MatDialogModule,
        MatTableModule,
        MatCheckboxModule,
        MatIconModule,
        StoreModule.forRoot()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list every user', () => {
    component.users$ = new Observable(observer => {
      let users: User[] = [
        new User("1 TEST", "Test Tester", "test@tester.com", false, []),
        new User("2 TEST", "John Doe", "john@doe.com", true, []),
        new User("3491913", "19309 15193", "e4913049@219021.com", false, [new TaskAction(ActionType.CREATE, "{}")])
      ];

      observer.next(users);
      observer.complete();
    });

    component.users$.subscribe(users => {
      component.dataSource.data = users;
    });

    fixture.detectChanges();

    // One row per user.
    expect(fixture.debugElement.queryAll(By.directive(MatRow)).length).toBe(3);
  })
});
