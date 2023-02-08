import { Injectable } from "@angular/core";
import { Actions, OnInitEffects, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Task } from "./task";
import { hydrate, hydrateFailure, hydrateSuccess } from "./hydration.actions";
import { map, switchMap, tap } from "rxjs";
import { clearDone, create, toggleStatus, updateDescription } from "./task.actions";
import { selectTasks } from "./task.selector";

const TASKS_STATE_LOCAL_STORAGE_KEY: string = "tasksState";

@Injectable()
export class HydrationEffects implements OnInitEffects {
    hydrateEffect$ = createEffect(() =>
        this.action$.pipe(
            ofType(hydrate),
            map(() => {
                const localStorageValue = localStorage.getItem(TASKS_STATE_LOCAL_STORAGE_KEY);

                if (!localStorageValue) {
                    return hydrateFailure();
                }

                try {
                    const partialState: Map<string, Task> = new Map(Object.entries(JSON.parse(localStorageValue)));
                    const state: Map<string, Task> = new Map();

                    // Instantiate tasks from partial data saved within the local storage.
                    for (let item of partialState) {
                        const task = item[1];

                        state.set(item[0], new Task(task.id, task.status, task.description));
                    }

                    return hydrateSuccess({ state });
                } catch {
                    localStorage.removeItem(TASKS_STATE_LOCAL_STORAGE_KEY);
                    return hydrateFailure();
                }
            })
        )
    );

    /**
     * Serialize every change into the local storage, in order to persist through
     * a page refresh.
     */
    serializeState$ = createEffect(() => this.action$.pipe(
        ofType(hydrateSuccess, hydrateFailure, create, updateDescription, toggleStatus, clearDone),
        switchMap(() => this.store.select(selectTasks)),
        tap((state) => {
            localStorage.setItem(TASKS_STATE_LOCAL_STORAGE_KEY, JSON.stringify(Object.fromEntries(state)));
        })),
        { dispatch: false });

    constructor(private action$: Actions, private store: Store) {

    }

    ngrxOnInitEffects(): Action {
        // Try to load cached values within the local storage.
        return hydrate();
    }
}