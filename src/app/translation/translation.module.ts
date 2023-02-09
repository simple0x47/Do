import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatorDialogComponent } from './translator-dialog/translator-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslationApiModule } from '../translation-api/translation-api.module';
import { StoreModule } from '@ngrx/store';
import { LANGUAGES_FEATURE_KEY } from './translation.actions';
import { languagesReducer } from './translation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TranslationEffects } from './translation.effects';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TranslatorDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    TranslationApiModule,
    StoreModule.forFeature(LANGUAGES_FEATURE_KEY, languagesReducer),
    EffectsModule.forFeature(TranslationEffects)
  ]
})
export class TranslationModule { }
