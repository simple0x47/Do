import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewDialogComponent } from './user-view-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserActionsViewComponent } from '../user-actions-view/user-actions-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { User } from '../user';

describe('UserViewDialogComponent', () => {
  let component: UserViewDialogComponent;
  let fixture: ComponentFixture<UserViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserViewDialogComponent,
        UserActionsViewComponent
      ],
      imports: [
        MatDialogModule,
        MatCheckboxModule,
        MatCardModule,
        MatExpansionModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();

    TestBed.createComponent(UserActionsViewComponent);
    fixture = TestBed.createComponent(UserViewDialogComponent);
    component = fixture.componentInstance;
    component.data.user = new User("1", "test", "test@gmail.com", true, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
