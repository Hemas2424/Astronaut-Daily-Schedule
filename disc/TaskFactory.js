"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskFactory = void 0;
const Task_1 = require("./Task");
class TaskFactory {
    static createTask(description, startTime, endTime, priority) {
        // Additional validation for time formats can be done here
        return new Task_1.Task(description, startTime, endTime, priority);
    }
}
exports.TaskFactory = TaskFactory;
