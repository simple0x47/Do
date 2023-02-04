import { createAction, props } from "@ngrx/store";
import { Task } from "./task";

type UpdateDescriptionPayload = { task_id: string; task_description: string };
type ToggleStatusPayload = { task_id: string }
type RemovePayload = { task_id: string }

export const create = createAction('[Task] Create', props<{ payload: Task }>);
export const updateDescription = createAction('[Task] Update Description', props<{ payload: UpdateDescriptionPayload }>);
export const toggleStatus = createAction('[Task] Toggle Status', props<{ payload: ToggleStatusPayload }>);
export const remove = createAction('[Task] Remove', props<{ payload: RemovePayload }>);