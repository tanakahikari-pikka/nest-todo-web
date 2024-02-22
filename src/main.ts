import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingService } from './logging/logging.service';
import { AllExceptionFilter } from './exception/exception.filter';
import { logger } from './common/middleware/logger/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggingService: LoggingService = app.get(LoggingService);
  const AllExceptionsFilter = new AllExceptionFilter(loggingService);

  app.use(logger);
  app.useLogger(loggingService);
  app.useGlobalFilters(AllExceptionsFilter);
  await app.listen(3000);
}
bootstrap();
