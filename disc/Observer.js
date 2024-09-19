"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = void 0;
class Observer {
    checkConflicts(newTask, existingTasks) {
        for (let task of existingTasks) {
            if ((newTask.startTime < task.endTime && newTask.startTime >= task.startTime) ||
                (newTask.endTime > task.startTime && newTask.endTime <= task.endTime)) {
                console.log(`Task conflicts with existing task "${task.description}"`);
                return true;
            }
        }
        return false;
    }
}
exports.Observer = Observer;
