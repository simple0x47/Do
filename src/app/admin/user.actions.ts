import { createAction, props } from "@ngrx/store";
import { User } from "./user";

export const getAll = createAction('[User] Get All');
export const getAllSuccess = createAction('[User] Get All Success', props<{ users: User[] }>());
export const getAllFailure = createAction('[User] Get All Failure');