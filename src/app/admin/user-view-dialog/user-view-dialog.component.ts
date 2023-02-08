import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../user';

export interface DialogData {
  user: User
}

@Component({
  selector: 'app-user-view-dialog',
  templateUrl: './user-view-dialog.component.html',
  styleUrls: ['./user-view-dialog.component.css']
})
export class UserViewDialogComponent {
  constructor(
    public dialogReference: MatDialogRef<UserViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
}
