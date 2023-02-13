import { TestBed } from '@angular/core/testing';

import { UserRoleService } from './user-role.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';

describe('RoleService', () => {
  let service: UserRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
      providers: [
        UserRoleService,
        { provide: AuthService, useValue: {} }
      ]
    });
    service = TestBed.inject(UserRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
