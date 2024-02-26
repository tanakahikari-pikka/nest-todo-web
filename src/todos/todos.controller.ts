import { Controller, Get, Param } from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller("todos")
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async fetchTodos() {
    return this.todosService.fetchTodos();
  }

  // Pipeを使う?
  @Get(":id")
  async findOne(id: number) {
    return this.todosService.findOne(id);
  }
}
