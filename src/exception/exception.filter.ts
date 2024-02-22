import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	HttpStatus,
} from "@nestjs/common";
import { FastifyReply } from "fastify";
import { LoggingService } from "src/logging/logging.service";

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
	constructor(private readonly log: LoggingService) {}

	private readonly selectStatus = (exception: unknown): number => {
		return exception instanceof HttpException
			? exception.getStatus()
			: HttpStatus.INTERNAL_SERVER_ERROR;
	};

	private readonly selectErrorText = (
		exception: unknown,
	): { message: string; stack: string } => {
		if (exception instanceof Error) {
			return { message: exception.message, stack: exception.stack };
		}
		if (exception instanceof HttpException) {
			return { message: exception.message, stack: exception.stack };
		}
		return { message: "unknown message", stack: "unknown stack" };
	};

	public catch(exception: unknown, host: ArgumentsHost) {
		const context = host.switchToHttp();
		const response = context.getResponse<FastifyReply>();
		const request = context.getRequest();

		// ロギングとレスポンスのための変数を定義
		const status = this.selectStatus(exception);
		const message = this.selectErrorText(exception).message;
		const uid = request.uid ? request.uid : "anonymous";
		const url = request.url;
		const method = request.method;

		// ロギング
		this.log.error({ url, method, uid, message: `${message}` });

		// レスポンス
		response.status(status).send({ statusCode: status, message });
	}
}
