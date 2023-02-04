import { v4 as uuidv4 } from 'uuid';

export enum TaskStatus {
    PENDING,
    DONE
}

export class Task {
    public readonly id: string;
    public description: string;
    public status: TaskStatus;

    constructor() {
        this.id = uuidv4();
        this.description = '';
        this.status = TaskStatus.PENDING;
    }

    public toggleStatus(): void {
        if (this.status === TaskStatus.PENDING) {
            this.status = TaskStatus.DONE;
        } else {
            this.status = TaskStatus.PENDING;
        }
    }
}