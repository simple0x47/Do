import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateButtonComponent } from './translate-button.component';
import { TaskTranslatableAdapter } from '../task-translatable-adapter';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

describe('TranslateButtonComponent', () => {
  let component: TranslateButtonComponent;
  let fixture: ComponentFixture<TranslateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranslateButtonComponent],
      imports: [
        MatDialogModule,
        MatIconModule
      ],
      providers: [{ provide: TaskTranslatableAdapter, useValue: {} }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TranslateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
