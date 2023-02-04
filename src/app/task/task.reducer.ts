import { createReducer, on } from "@ngrx/store";
import { Task } from "./task";
import { create, remove, toggleStatus, updateDescription } from "./task.actions";

export const initialState: Map<string, Task> = new Map();

export const taskReducer = createReducer(
    initialState,
    on(create, (state, payload) => {
        const task = payload._p.payload;
        state.set(task.id, task);

        return state;
    }),
    on(updateDescription, (state, payload) => {
        const task_id = payload._p.payload.task_id;
        const task_description = payload._p.payload.task_description;

        const task = state.get(task_id);

        if (task === undefined) {
            return state;
        }

        task.description = task_description;
        state.set(task_id, task);
        return state;
    }),
    on(toggleStatus, (state, payload) => {
        const task_id = payload._p.payload.task_id;

        const task = state.get(task_id);

        if (task === undefined) {
            return state;
        }

        task.toggleStatus();

        state.set(task_id, task);
        return state;
    }),
    on(remove, (state, payload) => {
        const task_id = payload._p.payload.task_id;

        state.delete(task_id);

        return state;
    })
)