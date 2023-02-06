import { createAction, props } from "@ngrx/store";
import { Task } from "./task";

export const hydrate = createAction('[Hydration] Hydrate');
export const hydrateSuccess = createAction('[Hydration] Hydrate Success', props<{ state: Map<string, Task> }>());
export const hydrateFailure = createAction('[Hydration] Hydrate Failure');