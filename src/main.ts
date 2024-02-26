import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { httpObserveLogger } from "./common/middleware/logger/logger.middleware";
import { AllExceptionFilter } from "./exception/exception.filter";
import { LoggingService } from "./logging/logging.service";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const loggingService: LoggingService = app.get(LoggingService);
	const AllExceptionsFilter = new AllExceptionFilter(loggingService);

	app.use(httpObserveLogger);
	app.useLogger(loggingService);
	app.useGlobalFilters(AllExceptionsFilter);
	await app.listen(3000);
}
bootstrap();
