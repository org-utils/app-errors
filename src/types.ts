import type { ErrorCode } from "./error-codes";
import type { HttpStatusCode } from "./http-status";

export interface ErrorDetail {
  field?: string;
  code?: string;
  message: string;
  value?: unknown;
  [key: string]: unknown;
}

export interface AppErrorOptions {
  cause?: unknown;
  isOperational?: boolean;
  details?: ErrorDetail[];
  code?: ErrorCode
  statusCode?: HttpStatusCode
}

export interface ErrorPayload {
  code: string;
  message: string;
  details?: ErrorDetail[];
  stack?: string;
}

export interface NormalizedError {
  code: string;
  message: string;
  statusCode: number;
  isOperational: boolean;
  details?: ErrorDetail[];
  cause?: unknown;
}
