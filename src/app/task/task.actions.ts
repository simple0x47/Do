import { createAction, props } from "@ngrx/store";
import { Task } from "./task";

export const create = createAction('[Task] Create', props<{ task: Task }>());
export const updateDescription = createAction('[Task] Update Description', props<{ task_id: string; task_description: string }>());
export const toggleStatus = createAction('[Task] Toggle Status', props<{ task_id: string }>());
export const clearDone = createAction('[Task] Clear Done');