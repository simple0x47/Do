import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskActionService } from "../task-api/task-action/task-action.service";
import { EMPTY, catchError, mergeMap } from "rxjs";
import { map } from "rxjs/operators";
import { create, actionCompleted, toggleStatus, updateDescription, clearDone, loadSnapshot, loadSnapshotSuccess, translate } from "./task.actions";
import { TasksSnapshotService } from "../task-api/tasks-snapshot/tasks-snapshot.service";
import { Task } from "./task";

@Injectable()
export class TaskEffects {
    registerCreateAction$ = createEffect(() => this.actions$.pipe(
        ofType(create),
        map((payload) => {
            this.taskActionService.registerCreate(payload.task.id);

            return actionCompleted();
        })
    ));

    registerToggleStatusAction$ = createEffect(() => this.actions$.pipe(
        ofType(toggleStatus),
        map((payload) => {
            this.taskActionService.registerToggleStatus(payload.taskId);

            return actionCompleted();
        })
    ));

    registerUpdateDescriptionAction$ = createEffect(() => this.actions$.pipe(
        ofType(updateDescription),
        map((payload) => {
            this.taskActionService.registerUpdateDescription(payload.taskId, payload.taskDescription);

            return actionCompleted();
        })
    ));

    registerClearDoneAction$ = createEffect(() => this.actions$.pipe(
        ofType(clearDone),
        map((_) => {
            this.taskActionService.registerClearDone();

            return actionCompleted();
        })
    ));

    registerTranslateAction$ = createEffect(() => this.actions$.pipe(
        ofType(translate),
        map((payload) => {
            this.taskActionService.registerTranslate(payload.taskId, payload.metadata);

            return actionCompleted();
        })
    ));

    loadSnapshot$ = createEffect(() => this.actions$.pipe(
        ofType(loadSnapshot),
        mergeMap(() => this.taskSnapshotService.getSnapshot$
            .pipe(
                map(snapshot => {
                    let tasks: Task[] = [];
                    for (let task of snapshot) {
                        tasks.push(new Task(task.id, task.status, task.description));
                    }

                    return loadSnapshotSuccess({ snapshot: tasks });
                }),
                catchError(() => EMPTY)
            ))
    ));

    constructor(
        private actions$: Actions,
        private taskActionService: TaskActionService,
        private taskSnapshotService: TasksSnapshotService) { }
}