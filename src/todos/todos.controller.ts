import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller("todos")
export class TodosController {
	constructor(private readonly todosService: TodosService) {}

	@Get()
	async fetchTodos() {
		return this.todosService.fetchTodos();
	}

  @Post()
  async createTodo(@Body() params: any) {
    return this.todosService.createTodo(
      params
    );
  }
}
