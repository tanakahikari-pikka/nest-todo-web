import { Controller, Get, Param } from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller("todos")
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  fetchTodos() {
    return this.todosService.fetchTodos();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.todosService.findOne(id);
  }
}
