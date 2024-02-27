import { NextFunction, Request, Response } from "express";

export function httpObserveLogger(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req != null) {
    console.log(
      `HTTP Request date: ${new Date()} method: ${req.method} URL: ${
        req.path
      } IP: ${req.hostname} `,
    );
  }
  if (res != null) {
    console.log(
      `HTTP Response status date: ${new Date()}  code: ${res.statusCode}`,
    );
  }
  next();
}
