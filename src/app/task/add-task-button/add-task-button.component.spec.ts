import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskButtonComponent } from './add-task-button.component';
import { StoreModule } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';

describe('AddTaskButtonComponent', () => {
  let component: AddTaskButtonComponent;
  let fixture: ComponentFixture<AddTaskButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaskButtonComponent],
      imports: [
        MatIconModule,
        StoreModule.forRoot()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
