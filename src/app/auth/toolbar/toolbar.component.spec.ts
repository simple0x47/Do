import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { UserActionsComponent } from '../user-actions/user-actions.component';
import { AuthService } from '@auth0/auth0-angular';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        LoginButtonComponent,
        UserActionsComponent
      ],
      imports: [
        MatToolbarModule,
      ],
      providers: [
        { provide: AuthService, useValue: {} },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
