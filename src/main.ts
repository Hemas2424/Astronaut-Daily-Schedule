import { ScheduleManager } from "./ScheduleManager";
import { Priority } from "./Task";

const scheduleManager = ScheduleManager.getInstance();

// Positive Test Cases
scheduleManager.addTask("Morning Exercise", "07:00", "08:00", Priority.High);
scheduleManager.addTask("Team Meeting", "09:00", "10:00", Priority.Medium);
//view task
scheduleManager.viewTasks();
// Remove a task
scheduleManager.removeTask("Morning Exercise");
scheduleManager.viewTasks();
//add task
scheduleManager.addTask("Lunch Break", "12:00", "13:00", Priority.Low);



// Negative Test Cases
scheduleManager.addTask("Training Session", "09:30", "10:30", Priority.High); // Should show conflict
scheduleManager.removeTask("Non-existent Task"); // Should show error
scheduleManager.addTask("Invalid Time Task", "25:00", "26:00", Priority.Low);
scheduleManager.addTask("Overlap Task", "08:30", "09:30", Priority.Medium);

// Mark a task as completed
scheduleManager.markTaskAsCompleted("Morning Exercise");
scheduleManager.viewTasks();

// Editing a task
scheduleManager.editTask("Team Meeting", "Afternoon Meeting", "13:00", "14:00", Priority.Medium);
scheduleManager.viewTasks();
