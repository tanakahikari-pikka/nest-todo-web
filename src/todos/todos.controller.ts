import { Controller, Get, Param } from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller("todos")
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async fetchTodos() {
    return await this.todosService.fetchTodos();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.todosService.findOne(id);
  }
}
