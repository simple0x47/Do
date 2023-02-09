import { TranslationItem } from "./translation-item"

export type TranslationResponse = {
    data: {
        translations: TranslationItem[]
    }
}