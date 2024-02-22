export function httpObserveLogger(req, res, next) {
	if (req != null) {
		console.log(
			// 現在の時間を出力

			`HTTP Request date: ${new Date()} method: ${req.method} URL: ${
				req.path
			} IP: ${req.host} `,
		);
	}
	if (res != null) {
		console.log(
			`HTTP Response status date: ${new Date()}  code: ${res.statusCode}`,
		);
	}
	next();
}
