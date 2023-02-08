export class User {
    public readonly id: string;
    public readonly name: string;
    public readonly email: string;
    public readonly hasUsedTranslator: boolean;
    public readonly lastActionOn?: number;

    constructor(id: string, name: string, email: string, hasUsedTranslator: boolean, lastActionOn?: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.hasUsedTranslator = hasUsedTranslator;
        this.lastActionOn = lastActionOn;
    }
}