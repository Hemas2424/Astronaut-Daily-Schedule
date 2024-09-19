export enum Priority {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

export class Task {
  constructor(
      public description: string,
      public startTime: string,
      public endTime: string,
      public priority: Priority,
      public completed: boolean = false
  ) {}

  markCompleted() {
      this.completed = true;
  }
}
