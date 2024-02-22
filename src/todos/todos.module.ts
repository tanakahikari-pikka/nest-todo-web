import { Module } from "@nestjs/common";
import { ExceptionModule } from "../exception/exception.module";
import { LoggingModule } from "../logging/logging.module";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";

@Module({
	imports: [LoggingModule, ExceptionModule],
	controllers: [TodosController],
	providers: [TodosService],
})
export class TodosModule {}
