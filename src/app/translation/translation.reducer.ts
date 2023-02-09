import { createReducer, on } from "@ngrx/store";
import { Language } from "../translation-api/language";
import { loadLanguagesSuccess } from "./translation.actions";

const languagesInitialState: Language[] = [];

export const languagesReducer = createReducer(
    languagesInitialState,
    on(loadLanguagesSuccess, (state, payload) => {
        state = payload.languages;

        return state;
    })
);