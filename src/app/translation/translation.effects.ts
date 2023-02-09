import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TranslatorService } from "../translation-api/translator/translator.service";
import { loadLanguages, loadLanguagesSuccess, translate, translateSuccess } from "./translation.actions";
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

    translate = createEffect(() => this.actions$.pipe(
        ofType(translate),
        mergeMap((payload) => this.translatorService.translate(payload.sourceLanguage, payload.targetLanguage, payload.translatables).pipe(
            map(_ => (translateSuccess())),
            catchError(() => EMPTY)
        ))
    ));

    constructor(private actions$: Actions,
        private translatorService: TranslatorService) { }
}