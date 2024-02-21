import { TodoStatus } from './todo_status.enum';

export interface Todo {
  id: Int16Array;
  body: string;
  status: TodoStatus;
  createdAt: string;
  updatedAt: string;
}
