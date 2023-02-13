import { Component } from '@angular/core';
import { TaskTranslatableAdapter } from '../task-translatable-adapter';
import { MatDialog } from '@angular/material/dialog';
import { TranslatorDialogComponent } from 'src/app/translation/translator-dialog/translator-dialog.component';

@Component({
  selector: 'app-translate-button',
  templateUrl: './translate-button.component.html',
  styleUrls: ['./translate-button.component.css']
})
export class TranslateButtonComponent {
  constructor(private taskTranslatableAdapter: TaskTranslatableAdapter,
    private dialog: MatDialog) {

  }

  public openTranslationDialog() {
    this.taskTranslatableAdapter.taskTranslatables$.subscribe(translatables => {
      this.dialog.open(TranslatorDialogComponent, {
        data: {
          translatables
        }
      });
    });
  }
}
