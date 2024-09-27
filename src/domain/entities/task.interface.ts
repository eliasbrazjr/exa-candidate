import { TaskStatus } from './task-status.enum';

export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  doneAt: Date;
  status: TaskStatus;
}
