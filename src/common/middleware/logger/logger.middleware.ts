export function logger(req, res, next) {
  if (req != null) {
    console.log(
      `HTTP Request method: ${req.method} URL: ${req.path} IP: ${req.host} `,
    );
  }
  if (res != null) {
    console.log(`HTTP Response status code: ${res.statusCode}`);
  }
  next();
}
