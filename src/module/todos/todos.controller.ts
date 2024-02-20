import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosServise: TodosService) {}

  @Get()
  async fetchTodos() {
    return this.todosServise.fetchTodos();
  }
}
