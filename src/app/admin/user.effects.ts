import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getAll, getAllSuccess } from "./user.actions";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { UserService } from "../admin-api/user.service";

@Injectable()
export class UserEffects {
    getAll$ = createEffect(() => { return this.actions$.pipe(
        ofType(getAll),
        mergeMap(() => this.userService.getAll$.pipe(
            map(users => (getAllSuccess({ users }))),
            catchError(() => EMPTY)
        ))
    ) });

    constructor(private actions$: Actions,
        private userService: UserService) { }
}