import { Component, Inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLanguages } from '../translation.selector';
import { Translatable } from '../../translation-api/translatable';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { loadLanguages, translate } from '../translation.actions';

export interface DialogData {
  translatables: Translatable[]
}

@Component({
  selector: 'app-translator-dialog',
  templateUrl: './translator-dialog.component.html',
  styleUrls: ['./translator-dialog.component.css']
})
export class TranslatorDialogComponent implements OnInit {
  languages$;

  public translatables: Translatable[] = [];

  private sourceLanguage = "";
  private targetLanguage = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
    private store: Store) {
    this.languages$ = this.store.select(selectLanguages);
    this.translatables = data.translatables;
  }

  public setSourceLanguage(sourceLanguage: string) {
    this.sourceLanguage = sourceLanguage;
  }

  public setTargetLanguage(targetLanguage: string) {
    this.targetLanguage = targetLanguage;
  }

  public shouldTranslateButtonBeDisabled(): boolean {
    if (this.sourceLanguage === "") {
      return true;
    }

    if (this.targetLanguage === "") {
      return true;
    }

    return false;
  }

  public translate() {
    if (this.shouldTranslateButtonBeDisabled()) {
      return;
    }

    console.log("this.translatables: " + this.translatables);
    this.store.dispatch(translate({ sourceLanguage: this.sourceLanguage, targetLanguage: this.targetLanguage, translatables: this.translatables }));
  }

  ngOnInit() {
    this.store.dispatch(loadLanguages());
  }
}
