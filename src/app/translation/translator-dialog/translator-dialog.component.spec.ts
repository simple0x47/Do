import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorDialogComponent } from './translator-dialog.component';

describe('TranslatorDialogComponent', () => {
  let component: TranslatorDialogComponent;
  let fixture: ComponentFixture<TranslatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslatorDialogComponent ]
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
