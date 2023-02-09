import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectTasks } from "./task.selector";
import { Task } from "./task";
import { Observable, map } from "rxjs";
import { Translatable } from "../translation-api/translatable";
import { updateDescription } from "./task.actions";

@Injectable()
export class TaskTranslatableAdapter {
    private tasks$: Observable<Map<string, Task>>;
    public taskTranslatables$: Observable<Translatable[]>;

    constructor(private store: Store) {
        this.tasks$ = this.store.select(selectTasks);
        this.taskTranslatables$ = new Observable((observer) => {
            let translatables: Translatable[] = [];

            let tasksSubscription = this.tasks$.subscribe(tasks => {
                for (let keyValueTask of tasks) {
                    translatables.push({
                        getText(): string {
                            return keyValueTask[1].description;
                        },
                        setText(translatedText: string): void {
                            // Trigger update description passing as a parameter the translated text.
                            store.dispatch(updateDescription({ taskId: keyValueTask[0], taskDescription: translatedText }));
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