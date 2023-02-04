import { createFeatureSelector } from "@ngrx/store";
import { Task } from "./task";
import { TASK_FEATURE_KEY } from "./task.reducer";

export const selectTasks = createFeatureSelector<Map<string, Task>>(TASK_FEATURE_KEY);