export enum ActionType {
    CREATE,
    TOGGLE_STATUS,
    UPDATE_DESCRIPTION,
    TRANSLATE,
    CLEAR_DONE
}

export class TaskAction {
    action: ActionType;
    payload: string;
    timestamp: number;

    constructor(action: ActionType, payload: string) {
        this.action = action;
        this.payload = payload;
        this.timestamp = Date.now();
    }
}