import { createAction, props } from "@ngrx/store";
import { Task } from "./task";

export const create = createAction('[Task] Create', props<{ task: Task }>());
export const updateDescription = createAction('[Task] Update Description', props<{ taskId: string; taskDescription: string }>());
export const toggleStatus = createAction('[Task] Toggle Status', props<{ taskId: string }>());
export const clearDone = createAction('[Task] Clear Done');
export const loadSnapshot = createAction('[Task] Load Snapshot');
export const loadSnapshotSuccess = createAction('[Task] Load Snapshot Success', props<{ snapshot: Task[] }>());
export const loadSnapshotFailure = createAction('[Task] Load Snapshot Failure');

/**
 * Generic action for indicating when a Task related action has been completed.  
 */
export const actionCompleted = createAction('[Task] Action Completed');
