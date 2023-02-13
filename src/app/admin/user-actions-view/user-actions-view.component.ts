import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-actions-view',
  templateUrl: './user-actions-view.component.html',
  styleUrls: ['./user-actions-view.component.css']
})
export class UserActionsViewComponent {
  @Input()
  public user: User | null = null;
}
