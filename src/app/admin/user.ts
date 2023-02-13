import { TaskAction } from "../task-action";

export class User {
    public readonly id: string;
    public readonly name: string;
    public readonly email: string;
    public readonly hasUsedTranslator: boolean;
    public actions: TaskAction[];

    constructor(id: string, name: string, email: string, hasUsedTranslator: boolean, actions: TaskAction[] = []) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.hasUsedTranslator = hasUsedTranslator;
        this.actions = actions;
    }
}