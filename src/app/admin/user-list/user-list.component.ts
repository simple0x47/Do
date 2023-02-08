import { Component } from '@angular/core';
import { User } from '../user';
import { Store } from '@ngrx/store';
import { selectUsers } from '../user.selector';
import { Observable, Subscription, first } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { getAll } from '../user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public users$: Observable<User[]>;

  public dataSource = new MatTableDataSource<User>([]);
  public displayedColumns = ["id", "name", "email", "hasUsedTranslator", "actions"];

  private usersSubscription: Subscription;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUsers);

    this.usersSubscription = this.users$.subscribe(users => {
      this.dataSource.data = users;
    })
  }

  ngOnInit() {
    this.store.dispatch(getAll());
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}
