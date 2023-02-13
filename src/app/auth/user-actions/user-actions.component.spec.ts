import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionsComponent } from './user-actions.component';
import { AuthService } from '@auth0/auth0-angular';
import { UserRoleService } from 'src/app/auth-api/user-role/user-role.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AdminButtonComponent } from '../admin-button/admin-button.component';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';

describe('UserActionsComponent', () => {
  let component: UserActionsComponent;
  let fixture: ComponentFixture<UserActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserActionsComponent,
        AdminButtonComponent,
        LogoutButtonComponent
      ],
      imports: [
        MatIconModule,
        MatMenuModule
      ],
      providers: [
        { provide: AuthService, useValue: { isAuthenticated$: of(true), } },
        { provide: HttpClient, useValue: {} },
        { provide: UserRoleService, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
