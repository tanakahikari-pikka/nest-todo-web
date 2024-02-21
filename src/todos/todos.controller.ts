import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todos.model';
import { TodoStatus } from './todo_status.enum';

@Controller('todos')
export class TodosController {
  constructor(private readonly TodosServise: TodosService) {}

  @Get()
  fetchTodos(): Todo[] {
    return this.TodosServise.fetchTodos();
  }

  @Post()
  createTodo(@Body('id') id: Int16Array, @Body('body') body: string): Todo {
    return this.TodosServise.createTodo({
      id,
      body,
      status: TodoStatus.TODO,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }
}
