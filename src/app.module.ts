import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggingModule } from "./logging/logging.module";
import { TodosModule } from "./todos/todos.module";

@Module({
  imports: [TodosModule, LoggingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
