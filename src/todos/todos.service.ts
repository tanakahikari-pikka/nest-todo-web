import { Injectable } from '@nestjs/common';
import { Todo } from './todos.model';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  fetchTodos(): Todo[] {
    return this.todos;
  }

  createTodo(todo: Todo) {
    this.todos.push(todo);
    return todo;
  }
}
