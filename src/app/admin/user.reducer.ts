import { createReducer, on } from "@ngrx/store";
import { User } from "./user";
import { getAllSuccess } from "./user.actions";

export const USER_FEATURE_KEY: string = "users";

export const initialState: User[] = [];

export const userReducer = createReducer(
    initialState,
    on(getAllSuccess, (state, payload) => {
        state = payload.users;

        return state;
    })
);