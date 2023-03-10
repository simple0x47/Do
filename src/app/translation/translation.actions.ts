import { createAction, props } from "@ngrx/store";
import { Language } from "../translation-api/language";
import { Translatable } from "../translation-api/translatable";

export const LANGUAGES_FEATURE_KEY = "languages";
export const TRANSLATION_FEATURE_KEY = "translation";

export const loadLanguages = createAction('[Translation] Load Languages');
export const loadLanguagesSuccess = createAction('[Translation] Load Languages Success', props<{ languages: Language[] }>());

export const translate = createAction('[Translation] Translate', props<{ sourceLanguage: string, targetLanguage: string, translatables: Translatable[] }>());
export const translateSuccess = createAction('[Translation] Translate Success');