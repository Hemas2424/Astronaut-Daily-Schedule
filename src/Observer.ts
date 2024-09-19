import { Task } from "./Task";

export class Observer {
    checkConflicts(newTask: Task, existingTasks: Task[]): boolean {
        for (let task of existingTasks) {
            if (
                (newTask.startTime < task.endTime && newTask.startTime >= task.startTime) ||
                (newTask.endTime > task.startTime && newTask.endTime <= task.endTime)
            ) {
                console.log(`Task conflicts with existing task "${task.description}"`);
                return true;
            }
        }
        return false;
    }
}
