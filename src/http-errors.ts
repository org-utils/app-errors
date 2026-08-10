import { AppError } from "./app-error.js";
import { ErrorCode } from "./error-codes.js";
import { HttpStatus } from "./http-status.js";
import type {
  AppErrorOptions,
  ErrorDetail,
} from "./types.js";
export class BadRequestError extends AppError {
  constructor(message = "Bad request", options?: AppErrorOptions) {
    const { statusCode = HttpStatus.BAD_REQUEST, code = ErrorCode.BAD_REQUEST, ...rest } = options || {}
    super(message,  statusCode, code, rest);
  }
}

export class ValidationError extends AppError {
  constructor(
    message = "Validation failed",
    details?: ErrorDetail[],
    options: AppErrorOptions = {},
  ) {
    const { statusCode = HttpStatus.UNPROCESSABLE_ENTITY, code = ErrorCode.VALIDATION_ERROR, ...rest } = options || {}

    super(
      message,
      statusCode,
      code,
      {
        ...rest,
        ...(details
          ? { details }
          : {}),
      },
    );
  }
}

export class UnauthorizedError extends AppError {
  constructor(
    message = "Authentication required",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.UNAUTHORIZED, code = ErrorCode.UNAUTHORIZED, ...rest } = options || {}

    super(
      message,
      statusCode,
      code,
      rest,
    );
  }
}

export class ForbiddenError extends AppError {
  constructor(
    message =
      "You do not have permission to perform this action",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.FORBIDDEN, code = ErrorCode.FORBIDDEN, ...rest } = options || {}

    super(
      message,
      statusCode,code,rest
    );
  }
}

export class NotFoundError extends AppError {
  constructor(
    message = "Resource not found",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.NOT_FOUND, code = ErrorCode.NOT_FOUND, ...rest } = options || {}

    super(
      message,
      statusCode , code, rest
    );
  }
}

export class MethodNotAllowedError extends AppError {
  constructor(
    message = "Method not allowed",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.METHOD_NOT_ALLOWED, code = ErrorCode.METHOD_NOT_ALLOWED, ...rest } = options || {}

    super(
      message,
      statusCode, code,rest
    );
  }
}

export class ConflictError extends AppError {
  constructor(
    message = "Resource conflict",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.CONFLICT, code = ErrorCode.CONFLICT, ...rest } = options || {}

    super(
      message,
      statusCode, code, rest
    );
  }
}

export class GoneError extends AppError {
  constructor(
    message = "Resource no longer available",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.GONE, code = ErrorCode.GONE, ...rest } = options || {}

    super(
      message,
      statusCode, code,rest
    );
  }
}

export class PreconditionFailedError extends AppError {
  constructor(
    message = "Precondition failed",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.PRECONDITION_FAILED, code = ErrorCode.PRECONDITION_FAILED, ...rest } = options || {}

    super(
      message,
      statusCode, code,rest
    );
  }
}

export class PayloadTooLargeError extends AppError {
  constructor(
    message = "Payload too large",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.PAYLOAD_TOO_LARGE, code = ErrorCode.PAYLOAD_TOO_LARGE, ...rest } = options || {}

    super(
      message,
      statusCode,code,rest
    );
  }
}

export class UnsupportedMediaTypeError extends AppError {
  constructor(
    message = "Unsupported media type",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.UNSUPPORTED_MEDIA_TYPE, code = ErrorCode.UNSUPPORTED_MEDIA_TYPE, ...rest } = options || {}

    super(
      message,
      statusCode, code,rest
    );
  }
}

export class UnprocessableEntityError extends AppError {
  constructor(
    message = "Unprocessable entity",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.UNPROCESSABLE_ENTITY, code = ErrorCode.UNPROCESSABLE_ENTITY, ...rest } = options || {}

    super(
      message,
      statusCode, code,rest
    );
  }
}

export class TooManyRequestsError extends AppError {
  readonly retryAfterSeconds?: number;

  constructor(
    message = "Too many requests",
    retryAfterSeconds?: number,
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.TOO_MANY_REQUESTS, code = ErrorCode.TOO_MANY_REQUESTS, ...rest } = options || {}

    super(
      message,
      statusCode,code,rest
    );

    if (
      retryAfterSeconds !== undefined
    ) {
      this.retryAfterSeconds =
        retryAfterSeconds;
    }
  }
}

export class InternalServerError extends AppError {
  constructor(
    message = "Internal server error",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.INTERNAL_SERVER_ERROR, code = ErrorCode.INTERNAL_SERVER_ERROR, ...rest } = options || {}

    super(
      message,
      statusCode,code,
      {
        isOperational: false,
        ...rest || {},
      },
    );
  }
}

export class NotImplementedError extends AppError {
  constructor(
    message = "Not implemented",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.NOT_IMPLEMENTED, code = ErrorCode.NOT_IMPLEMENTED, ...rest } = options || {}

    super(
      message,
      statusCode, code,rest
    );
  }
}

export class BadGatewayError extends AppError {
  constructor(
    message = "Bad gateway",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.BAD_GATEWAY, code = ErrorCode.BAD_GATEWAY, ...rest } = options || {}

    super(
      message,
      statusCode,code,
      {
        isOperational: false,
        ...rest || {},
      },
    );
  }
}

export class ServiceUnavailableError extends AppError {
  constructor(
    message = "Service temporarily unavailable",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.SERVICE_UNAVAILABLE, code = ErrorCode.SERVICE_UNAVAILABLE, ...rest } = options || {}

    super(
      message,
      statusCode,code,
      {
        isOperational: false,
        ...rest || {},
      },
    );
  }
}

export class GatewayTimeoutError extends AppError {
  constructor(
    message = "Gateway timeout",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.GATEWAY_TIMEOUT, code = ErrorCode.GATEWAY_TIMEOUT, ...rest } = options || {}

    super(
      message,
      statusCode,code,
      {
        isOperational: false,
        ...rest || {},
      },
    );
  }
}

export class CustomError extends AppError {
  constructor(
    message = "Internal server error",
    options?: AppErrorOptions,
  ) {
    const { statusCode = HttpStatus.INTERNAL_SERVER_ERROR, code = ErrorCode.INTERNAL_SERVER_ERROR, ...rest } = options || {}

    super(
      message,
      statusCode,code,
      rest || {},
    );
  }
}
