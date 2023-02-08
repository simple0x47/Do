import { Component } from '@angular/core';
import { User } from '../user';
import { Store } from '@ngrx/store';
import { selectUsers } from '../user.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public users$: Observable<User[]>;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUsers);
  }
}
