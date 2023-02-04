import { v4 as uuidv4 } from 'uuid';

export enum TaskStatus {
    PENDING,
    DONE
}

export class Task {
    public readonly id: string;
    public status: TaskStatus;
    public description: string;

    constructor(id?: string, status?: TaskStatus, description?: string) {
        if (!id) {
            id = uuidv4();
        }

        if (!status) {
            status = TaskStatus.PENDING;
        }

        if (!description) {
            description = '';
        }

        this.id = id;
        this.description = description;
        this.status = status;
    }

    /**
     * Create a new Task object with the same properties as this one, but with the status toggled.
     * @returns new Task instance with the status toggled.
     */
    public cloneWithToggledStatus(): Task {
        const toggledStatus = this.status === TaskStatus.PENDING ? TaskStatus.DONE : TaskStatus.PENDING;
        const new_task = new Task(this.id, toggledStatus, this.description);

        return new_task;
    }

    /**
     * Create a new Task object with the same properties as this one, but with the description changed.
     * @param new_description new description for the task.
     * @returns new Task instance with the description changed.
     */
    public cloneWithNewDescription(new_description: string): Task {
        const new_task = new Task(this.id, this.status, new_description);

        return new_task;
    }
}