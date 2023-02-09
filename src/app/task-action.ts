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

    public toString(): string {
        switch (this.action) {
            case ActionType.CREATE:
                return "Create"
            case ActionType.TOGGLE_STATUS:
                return "Toggle status"
            case ActionType.UPDATE_DESCRIPTION:
                return "Update description"
            case ActionType.TRANSLATE:
                return "Translate"
            case ActionType.CLEAR_DONE:
                return "Clear done"
        }
    }

    /**
     * 
     * @returns Date when the action has been realized.
     */
    public date(): Date {
        let date = new Date(this.timestamp);

        return date;
    }
}