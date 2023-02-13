import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionsViewComponent } from './user-actions-view.component';
import { User } from '../user';
import { TaskAction } from 'src/app/task-action';
import { By } from '@angular/platform-browser';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserAnalyticsViewComponent', () => {
  let component: UserActionsViewComponent;
  let fixture: ComponentFixture<UserActionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserActionsViewComponent
      ],
      imports: [
        MatCardModule,
        MatExpansionModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserActionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create one action item per action', () => {
    let actions = [new TaskAction(0, "{}"), new TaskAction(1, "{}")];
    component.user = new User("test", "test", "test", false, actions);
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.directive(MatCard)).length).toBe(2);
  });
});
