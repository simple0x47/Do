import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionsViewComponent } from './user-actions-view.component';

describe('UserAnalyticsViewComponent', () => {
  let component: UserActionsViewComponent;
  let fixture: ComponentFixture<UserActionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserActionsViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserActionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
