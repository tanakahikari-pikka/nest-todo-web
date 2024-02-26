import { Controller, Get, Patch } from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller("todos")
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async fetchTodos() {
    return this.todosService.fetchTodos();
  }

  @Patch()
  updateTodo(@Param("id") id: string, @Body() body: { title: string }) {
    return this.todosService.updateTodo();
  }
}
