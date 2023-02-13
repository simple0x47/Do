import { Action, ActionReducer } from "@ngrx/store";
import { Task } from "./task";
import { hydrateSuccess } from "./hydration.actions";

function isHydrateSuccessful(action: Action): action is ReturnType<typeof hydrateSuccess> {
    return action.type === hydrateSuccess.type;
}

export const hydrationMetaReducer = (reducer: ActionReducer<Map<string, Task>>): ActionReducer<Map<string, Task>> => {
    return (state, action) => {
        if (!isHydrateSuccessful(action)) {
            return reducer(state, action);
        }

        return action.state;
    };
};