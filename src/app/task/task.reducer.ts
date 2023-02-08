import { createReducer, on } from "@ngrx/store";
import { Task, TaskStatus } from "./task";
import { create, clearDone, toggleStatus, updateDescription, loadSnapshotSuccessfully } from "./task.actions";

export const TASK_FEATURE_KEY = 'tasks';

export const initialState: Map<string, Task> = new Map();

export const taskReducer = createReducer(
    initialState,
    on(create, (state, payload) => {
        const task = payload.task;
        state.set(task.id, task);

        return state;
    }),
    on(updateDescription, (state, payload) => {
        const task_id = payload.taskId;
        const task_description = payload.taskDescription;

        const task = state.get(task_id);

        if (task === undefined) {
            return state;
        }

        const new_task = task.cloneWithNewDescription(task_description);
        state.set(task_id, new_task);
        return state;
    }),
    on(toggleStatus, (state, payload) => {
        const task_id = payload.taskId;

        const task = state.get(task_id);

        if (task === undefined) {
            return state;
        }

        const new_task = task.cloneWithToggledStatus();

        state.set(task_id, new_task);
        return state;
    }),
    on(clearDone, (state) => {
        const tasksToBeRemoved: string[] = [];

        state.forEach((task, task_id) => {
            if (task.status === TaskStatus.DONE) {
                tasksToBeRemoved.push(task_id);
            }
        });

        tasksToBeRemoved.forEach((task_id) => {
            state.delete(task_id);
        });

        return state;
    }),
    on(loadSnapshotSuccessfully, (state, payload) => {
        state.clear();

        for (let task of payload.snapshot) {
            state.set(task.id, task);
        }

        return state;
    })
)