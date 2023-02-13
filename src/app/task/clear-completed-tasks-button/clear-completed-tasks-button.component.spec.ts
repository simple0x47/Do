import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearCompletedTasksButtonComponent } from './clear-completed-tasks-button.component';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule } from '@angular/material/dialog';

describe('ClearCompletedTasksButtonComponent', () => {
  let component: ClearCompletedTasksButtonComponent;
  let fixture: ComponentFixture<ClearCompletedTasksButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClearCompletedTasksButtonComponent],
      imports: [
        MatDialogModule,
        StoreModule.forRoot()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClearCompletedTasksButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
