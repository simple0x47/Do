import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearDone } from '../task.actions';
import { MatDialog } from '@angular/material/dialog';
import { ClearConfirmationDialogComponent } from '../clear-confirmation-dialog/clear-confirmation-dialog.component';

@Component({
  selector: 'app-clear-completed-tasks-button',
  templateUrl: './clear-completed-tasks-button.component.html',
  styleUrls: ['./clear-completed-tasks-button.component.css']
})
export class ClearCompletedTasksButtonComponent {
  @Input()
  public isDisabled: boolean;

  constructor(private store: Store, private dialog: MatDialog) {
    this.isDisabled = false;
  }

  public confirmClear() {
    const confirmationDialog = this.dialog.open(ClearConfirmationDialogComponent);

    // Clear completed tasks only if the result is 'true', and that
    // occurs only when the button 'Yes' is pressed.
    confirmationDialog.afterClosed().subscribe(hasYesBeenPressed => {
      if (hasYesBeenPressed) {
        this.clearCompletedTasks();
      }
    })
  }

  public clearCompletedTasks() {
    this.store.dispatch(clearDone());
  }
}
