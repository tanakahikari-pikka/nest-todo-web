import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { LoggingModule } from '../logging/logging.module';
import { ExceptionModule } from '../exception/exception.module';

@Module({
  imports: [LoggingModule, ExceptionModule],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
