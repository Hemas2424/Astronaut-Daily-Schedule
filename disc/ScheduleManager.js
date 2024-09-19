"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleManager = void 0;
const TaskFactory_1 = require("./TaskFactory");
const Observer_1 = require("./Observer");
class ScheduleManager {
    constructor() {
        this.tasks = [];
        this.observer = new Observer_1.Observer();
    }
    static getInstance() {
        if (!ScheduleManager.instance) {
            ScheduleManager.instance = new ScheduleManager();
        }
        return ScheduleManager.instance;
    }
    addTask(description, startTime, endTime, priority) {
        const newTask = TaskFactory_1.TaskFactory.createTask(description, startTime, endTime, priority);
        if (this.observer.checkConflicts(newTask, this.tasks)) {
            console.log(`Error: Task conflicts with existing task.`);
            return;
        }
        this.tasks.push(newTask);
        console.log("Task added successfully.");
        this.sortTasks();
    }
    removeTask(description) {
        const index = this.tasks.findIndex(task => task.description === description);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log("Task removed successfully.");
        }
        else {
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
    sortTasks() {
        this.tasks.sort((a, b) => {
            return a.startTime.localeCompare(b.startTime);
        });
    }
    editTask(oldDescription, newDescription, newStartTime, newEndTime, newPriority) {
        const index = this.tasks.findIndex(task => task.description === oldDescription);
        if (index !== -1) {
            this.tasks[index] = TaskFactory_1.TaskFactory.createTask(newDescription, newStartTime, newEndTime, newPriority);
            this.sortTasks();
            console.log("Task edited successfully.");
        }
        else {
            console.log("Error: Task not found.");
        }
    }
    markTaskAsCompleted(description) {
        const task = this.tasks.find(task => task.description === description);
        if (task) {
            task.markCompleted();
            console.log("Task marked as completed.");
        }
        else {
            console.log("Error: Task not found.");
        }
    }
}
exports.ScheduleManager = ScheduleManager;
