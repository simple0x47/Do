import { TranslationMetadata } from "./translation-metadata";

export interface Translatable {
    /**
     * Gets the text that will be translated.
     */
    getText(): string;
    /**
     * Sets the translated text as the active text.
     * @param translatedText
     * @param metadata
     */
    setText(translatedText: string, metadata: TranslationMetadata): void;
}