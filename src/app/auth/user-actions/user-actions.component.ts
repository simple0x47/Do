import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserRoleService } from 'src/app/auth-api/user-role/user-role.service';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent {
  constructor(public auth: AuthService, public userRole: UserRoleService) {

  }
}
