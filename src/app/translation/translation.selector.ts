import { createFeatureSelector } from "@ngrx/store";
import { LANGUAGES_FEATURE_KEY } from "./translation.actions";
import { Language } from "../translation-api/language";

export const selectLanguages = createFeatureSelector<Language[]>(LANGUAGES_FEATURE_KEY);