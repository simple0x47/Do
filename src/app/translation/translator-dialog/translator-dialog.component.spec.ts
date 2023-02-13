import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorDialogComponent } from './translator-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TranslatorDialogComponent', () => {
  let component: TranslatorDialogComponent;
  let fixture: ComponentFixture<TranslatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranslatorDialogComponent],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
        StoreModule.forRoot()
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TranslatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
