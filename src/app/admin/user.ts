import { UserAnalytics } from "./user-analytics";

export class User {
    public readonly id: string;
    public readonly name: string;
    public readonly email: string;
    public readonly hasUsedTranslator: boolean;
    public readonly lastActionOn?: number;
    public readonly analytics?: UserAnalytics;

    constructor(id: string, name: string, email: string, hasUsedTranslator: boolean, lastActionOn?: number, analytics?: UserAnalytics) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.hasUsedTranslator = hasUsedTranslator;
        this.lastActionOn = lastActionOn;
        this.analytics = analytics;
    }
}