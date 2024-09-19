Design and implement a console-based application that helps astronauts organize their daily schedules. The application should allow users
to add, remove, and view daily tasks. Each task will have a description, start time, end time, and priority level. The intent behind this problem
statement is to evaluate your ability to implement a basic CRUD (Create, Read, Update, Delete) application, manage data efficiently, and
apply best coding practices

<h1>Functional Requirements</h1>
<h2>Mandatory Requirements</h2>
1. Add a new task with description, start time, end time, and priority level.
2. Remove an existing task.
3. View all tasks sorted by start time.
4. Validate that new tasks do not overlap with existing tasks.
5. Provide appropriate error messages for invalid operations.
<h2>Optional Requirements</h2>
1. Edit an existing task.
2. Mark tasks as completed.
3. View tasks for a specific priority level.
<h2>Non-functional Requirements</h2>
1. The application should handle exceptions gracefully.
2. Ensure the application is optimized for performance.
3. Implement a logging mechanism for tracking application usage and errors.
<h2>Key Focus</h2>
Design Patterns to be used
1. Singleton Pattern: Ensure there is only one instance of the schedule manager.
2. Factory Pattern: Use a factory to create task objects.
3. Observer Pattern: Notify users of task conflicts or updates.
Detailed Instructions
1. Use the Singleton Pattern to create a ScheduleManager class that manages all tasks.
2. Implement a TaskFactory class to create Task objects.
3. Use the Observer Pattern to alert users if a new task conflicts with an existing one.
<h2>Possible Inputs and Corresponding Outputs</h2>
<h3>Positive Cases</h3>
1. Input: Add Task("Morning Exercise", "07:00", "08:00", "High") Output: Task added successfully. No conflicts.
2. Input: Add Task("Team Meeting", "09:00", "10:00", "Medium") Output: Task added successfully. No conflicts.
3. Input: View Tasks Output:
a. 07:00 - 08:00: Morning Exercise [High]
b. 09:00 - 10:00: Team Meeting [Medium]
4. Input: Remove Task("Morning Exercise") Output: Task removed successfully.
5. Input: Add Task("Lunch Break", "12:00", "13:00", "Low") Output: Task added successfully. No conflicts.
<h3>Negative Cases</h3>
1. Input: Add Task("Training Session", "09:30", "10:30", "High") Output: Error: Task conflicts with existing task "Team Meeting".
2. Input: Remove Task("Non-existent Task") Output: Error: Task not found.
3. Input: Add Task("Invalid Time Task", "25:00", "26:00", "Low") Output: Error: Invalid time format.
4. Input: Add Task("Overlap Task", "08:30", "09:30", "Medium") Output: Error: Task conflicts with existing task "Team Meeting".
5. Input: View Tasks (when no tasks exist) Output: No tasks scheduled for the day.