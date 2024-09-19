"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.Priority = void 0;
var Priority;
(function (Priority) {
    Priority["High"] = "High";
    Priority["Medium"] = "Medium";
    Priority["Low"] = "Low";
})(Priority || (exports.Priority = Priority = {}));
class Task {
    constructor(description, startTime, endTime, priority, completed = false) {
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.priority = priority;
        this.completed = completed;
    }
    markCompleted() {
        this.completed = true;
    }
}
exports.Task = Task;
