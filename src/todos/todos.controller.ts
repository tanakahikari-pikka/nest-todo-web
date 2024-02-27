import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { Todo } from "./todo";

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

  @Post()
  async createOne(@Body() body: Todo) {
    return await this.todosService.createOne(body);
  }

  @Patch(":id")
  async updateOne(@Param("id") id: string, @Body() body: Todo) {
    return await this.todosService.updateOne(id, body);
  }

  @Delete(":id")
  async deleteOne(@Param("id") id: string) {
    return await this.todosService.deleteOne(id);
  }
}
