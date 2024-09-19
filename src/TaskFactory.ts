import { Task, Priority } from "./Task";

export class TaskFactory {
    static createTask(description: string, startTime: string, endTime: string, priority: Priority): Task {
        // Additional validation for time formats can be done here
        return new Task(description, startTime, endTime, priority);
    }
}
