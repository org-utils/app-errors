import {
  AppError,
} from "./app-error.js";

import {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  MethodNotAllowedError,
  ConflictError,
  GoneError,
  PreconditionFailedError,
  PayloadTooLargeError,
  UnprocessableEntityError,
  TooManyRequestsError,
  InternalServerError,
  NotImplementedError,
  BadGatewayError,
  ServiceUnavailableError,
  GatewayTimeoutError,
} from "./http-errors.js";

import type {
  AppErrorOptions,
} from "./types.js";

export function httpError(
  statusCode: number,
  message?: string,
  options?: AppErrorOptions,
): AppError {
  switch (statusCode) {
    case 400:
      return new BadRequestError(
        message,
        options,
      );

    case 401:
      return new UnauthorizedError(
        message,
        options,
      );

    case 403:
      return new ForbiddenError(
        message,
        options,
      );

    case 404:
      return new NotFoundError(
        message,
        options,
      );

    case 405:
      return new MethodNotAllowedError(
        message,
        options,
      );

    case 409:
      return new ConflictError(
        message,
        options,
      );

    case 410:
      return new GoneError(
        message,
        options,
      );

    case 412:
      return new PreconditionFailedError(
        message,
        options,
      );

    case 413:
      return new PayloadTooLargeError(
        message,
        options,
      );

    case 422:
      return new UnprocessableEntityError(
        message,
        options,
      );

    case 429:
      return new TooManyRequestsError(
        message,
        undefined,
        options,
      );

    case 500:
      return new InternalServerError(
        message,
        options,
      );

    case 501:
      return new NotImplementedError(
        message,
        options,
      );

    case 502:
      return new BadGatewayError(
        message,
        options,
      );

    case 503:
      return new ServiceUnavailableError(
        message,
        options,
      );

    case 504:
      return new GatewayTimeoutError(
        message,
        options,
      );

    default:
      return new AppError(
        message ?? "Application error",
        statusCode,
        `HTTP_${statusCode}`,
        options,
      );
  }
}
