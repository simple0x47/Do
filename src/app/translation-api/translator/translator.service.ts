import { Injectable } from '@angular/core';
import { TranslationApiModule } from '../translation-api.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from '../language';
import { environment } from 'src/environments/environment';
import { LanguagesResponse } from './languages-response';
import { TranslationResponse } from './translation-response';
import { Translatable } from '../translatable';
import { TranslationMetadata } from '../translation-metadata';

@Injectable({
  providedIn: TranslationApiModule
})
export class TranslatorService {
  /**
   * Get the compatible languages from the Google API.
   */
  public getLanguages$: Observable<Language[]> = new Observable((observer) => {
    const languagesSubscription = this.client.get<LanguagesResponse>(
      `${environment.translation_api.url}/languages?target=en&model=nmt&key=${environment.translation_api.api_key}`
    ).subscribe(languageResponse => {
      observer.next(languageResponse.data.languages);
      observer.complete();
    });

    return {
      unsubscribe() {
        languagesSubscription.unsubscribe();
      },
    }
  });

  constructor(private client: HttpClient) { }

  /**
   * 
   * @param sourceLanguage language code *from* which the text will be translated
   * @param targetLanguage language code *to* which the text will be translated
   * @param translatables limited to 128 due to Google's API limit
   * @returns Observable which will post 'true' if the operation was a success, otherwise an error will be posted.
   */
  public translate(sourceLanguage: string, targetLanguage: string, translatables: Translatable[]): Observable<boolean> {
    return new Observable((observer) => {
      if (translatables.length > 128) {
        observer.error("Exceeded limit of texts to be translated");
        return;
      }

      // Escape special characters in order to avoid messing up the POST request.
      sourceLanguage = encodeURIComponent(sourceLanguage);
      targetLanguage = encodeURIComponent(targetLanguage);

      let queries = "";

      for (let i = 0; i < translatables.length; i++) {
        queries += "q=" + encodeURIComponent(translatables[i].getText()) + "&";
      }

      const translateSubscription = this.client.post<TranslationResponse>(
        `${environment.translation_api.url}?${queries}target=${targetLanguage}&source=${sourceLanguage}&model=base&key=${environment.translation_api.api_key}`,
        {}
      ).subscribe(translationResponse => {
        if (translationResponse.data.translations.length != translatables.length) {
          observer.error(`Got ${translationResponse.data.translations.length} expected ${translatables.length} translations`);
          return;
        }

        // Let the translatable know about the translation itself.
        const translationMetadata: TranslationMetadata = {
          sourceLanguage,
          targetLanguage
        }

        for (let i = 0; i < translatables.length; i++) {
          translatables[i].setText(translationResponse.data.translations[i].translatedText, translationMetadata);
        }

        observer.next(true);
        observer.complete();
      });

      return {
        unsubscribe() {
          translateSubscription.unsubscribe();
        }
      }
    });
  }
}
