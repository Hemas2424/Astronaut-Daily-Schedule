import { Task, Priority } from "./Task";
import { TaskFactory } from "./TaskFactory";
import { Observer } from "./Observer";

export class ScheduleManager {
    private static instance: ScheduleManager;
    private tasks: Task[] = [];
    private observer: Observer = new Observer();

    private constructor() {}

    static getInstance(): ScheduleManager {
        if (!ScheduleManager.instance) {
            ScheduleManager.instance = new ScheduleManager();
        }
        return ScheduleManager.instance;
    }

    addTask(description: string, startTime: string, endTime: string, priority: Priority) {
        const newTask = TaskFactory.createTask(description, startTime, endTime, priority);
        
        if (this.observer.checkConflicts(newTask, this.tasks)) {
            console.log(`Error: Task conflicts with existing task.`);
            return;
        }

        this.tasks.push(newTask);
        console.log("Task added successfully.");
        this.sortTasks();
    }

    removeTask(description: string) {
        const index = this.tasks.findIndex(task => task.description === description);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log("Task removed successfully.");
        } else {
            console.log("Error: Task not found.");
        }
    }

    viewTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks scheduled for the day.");
            return;
        }

        this.tasks.forEach(task => {
            console.log(`${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}] ${task.completed ? "(Completed)" : ""}`);
        });
    }

    private sortTasks() {
        this.tasks.sort((a, b) => {
            return a.startTime.localeCompare(b.startTime);
        });
    }

    editTask(oldDescription: string, newDescription: string, newStartTime: string, newEndTime: string, newPriority: Priority) {
        const index = this.tasks.findIndex(task => task.description === oldDescription);
        if (index !== -1) {
            this.tasks[index] = TaskFactory.createTask(newDescription, newStartTime, newEndTime, newPriority);
            this.sortTasks();
            console.log("Task edited successfully.");
        } else {
            console.log("Error: Task not found.");
        }
    }

    markTaskAsCompleted(description: string) {
        const task = this.tasks.find(task => task.description === description);
        if (task) {
            task.markCompleted();
            console.log("Task marked as completed.");
        } else {
            console.log("Error: Task not found.");
        }
    }
}
