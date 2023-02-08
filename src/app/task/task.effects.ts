import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskActionService } from "../task-api/task-action/task-action.service";
import { map } from "rxjs";
import { create, actionCompleted, toggleStatus, updateDescription, clearDone } from "./task.actions";

@Injectable()
export class TaskEffects {
    registerCreateAction$ = createEffect(() => this.actions$.pipe(
        ofType(create),
        map((payload) => {
            this.taskApiService.registerCreate(payload.task.id);

            return actionCompleted();
        })
    ));

    registerToggleStatusAction$ = createEffect(() => this.actions$.pipe(
        ofType(toggleStatus),
        map((payload) => {
            this.taskApiService.registerToggleStatus(payload.taskId);

            return actionCompleted();
        })
    ));

    registerUpdateDescriptionAction$ = createEffect(() => this.actions$.pipe(
        ofType(updateDescription),
        map((payload) => {
            this.taskApiService.registerUpdateDescription(payload.taskId, payload.taskDescription);

            return actionCompleted();
        })
    ));

    registerClearDoneAction$ = createEffect(() => this.actions$.pipe(
        ofType(clearDone),
        map((_) => {
            this.taskApiService.registerClearDone();

            return actionCompleted();
        })
    ));

    constructor(
        private actions$: Actions,
        private taskApiService: TaskActionService) { }
}