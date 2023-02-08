import { createFeatureSelector } from "@ngrx/store";
import { User } from "./user";
import { USER_FEATURE_KEY } from "./user.reducer";

export const selectUsers = createFeatureSelector<User[]>(USER_FEATURE_KEY);