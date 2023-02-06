import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearConfirmationDialogComponent } from './clear-confirmation-dialog.component';

describe('ClearConfirmationDialogComponent', () => {
  let component: ClearConfirmationDialogComponent;
  let fixture: ComponentFixture<ClearConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearConfirmationDialogComponent ]
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
