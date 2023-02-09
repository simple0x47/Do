import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TranslatorService } from "../translation-api/translator/translator.service";
import { loadLanguages, loadLanguagesSuccess, translate } from "./translation.actions";
import { EMPTY, catchError, map, mergeMap } from "rxjs";

@Injectable()
export class TranslationEffects {
    loadLanguages$ = createEffect(() => this.actions$.pipe(
        ofType(loadLanguages),
        mergeMap(() => this.translatorService.getLanguages$
            .pipe(
                map(languages => (loadLanguagesSuccess({ languages }))),
                catchError(() => EMPTY)
            ))
    ));



    constructor(private actions$: Actions,
        private translatorService: TranslatorService) { }
}