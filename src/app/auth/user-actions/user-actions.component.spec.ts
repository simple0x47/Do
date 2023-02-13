import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionsComponent } from './user-actions.component';
import { AuthService } from '@auth0/auth0-angular';
import { UserRoleService } from 'src/app/auth-api/user-role/user-role.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

describe('UserActionsComponent', () => {
  let component: UserActionsComponent;
  let fixture: ComponentFixture<UserActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserActionsComponent],
      imports: [
        MatIconModule,
        MatMenuModule
      ],
      providers: [
        { provide: AuthService, useValue: {} },
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
