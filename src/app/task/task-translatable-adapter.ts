import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectTasks } from "./task.selector";
import { Task } from "./task";
import { Observable } from "rxjs";
import { Translatable } from "../translation-api/translatable";
import { translate, updateDescription } from "./task.actions";
import { TranslationMetadata } from "../translation-api/translation-metadata";

@Injectable()
export class TaskTranslatableAdapter {
    private tasks$: Observable<Map<string, Task>>;
    public taskTranslatables$: Observable<Translatable[]>;

    constructor(private store: Store) {
        this.tasks$ = this.store.select(selectTasks);
        this.taskTranslatables$ = new Observable((observer) => {
            const translatables: Translatable[] = [];

            const tasksSubscription = this.tasks$.subscribe(tasks => {
                for (const keyValueTask of tasks) {
                    translatables.push({
                        getText(): string {
                            return keyValueTask[1].description;
                        },
                        setText(translatedText: string, metadata: TranslationMetadata): void {
                            // Trigger update description passing as a parameter the translated text.
                            store.dispatch(updateDescription({ taskId: keyValueTask[0], taskDescription: translatedText }));

                            // Trigger translate so we register that the user has used the translation feature.
                            store.dispatch(translate({ taskId: keyValueTask[0], metadata }));
                        },
                    })
                }

                observer.next(translatables);
                observer.complete();
            });

            return {
                unsubscribe() {
                    tasksSubscription.unsubscribe();
                },
            }
        });
    }

}