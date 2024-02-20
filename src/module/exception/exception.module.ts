import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { LoggingModule } from '../logging/logging.module';
import { AllExceptionFilter } from './exception.filter';

@Module({
  imports: [LoggingModule],
  providers: [{ provide: APP_FILTER, useClass: AllExceptionFilter }],
})
export class ExceptionModule {}
