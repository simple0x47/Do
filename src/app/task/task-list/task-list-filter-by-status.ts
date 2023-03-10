import { Pipe, PipeTransform } from "@angular/core";
import { Task, TaskStatus } from "../task";
import { KeyValue } from "@angular/common";

@Pipe({
    name: 'filterTasksByStatus',
    pure: true,
})
export class FilterByStatusPipe implements PipeTransform {
    transform(input: KeyValue<string, Task>[] | null, status: TaskStatus): Task[] | null {
        const result: Task[] = [];

        if (input === null) {
            return result;
        }

        if (status === undefined || status === null) {
            return result;
        }

        for (const task of input) {
            if (task.value.status == status) {
                result.push(task.value);
            }
        }

        return result;
    }
}