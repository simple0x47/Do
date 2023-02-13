import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearConfirmationDialogComponent } from './clear-confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('ClearConfirmationDialogComponent', () => {
  let component: ClearConfirmationDialogComponent;
  let fixture: ComponentFixture<ClearConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClearConfirmationDialogComponent],
      imports: [
        MatDialogModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClearConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
