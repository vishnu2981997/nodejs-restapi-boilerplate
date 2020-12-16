import config from 'config';

export class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err, req, res) => {
  const { statusCode = 500, message = '', stack = '' } = err;
  const stackTrace = stack
    .split(/\r?\n/)
    .map((string) => string.trim())
    .filter((string) => string !== '');

  res.status(statusCode).json({
    code: statusCode,
    result: message,
    ...(config.get('server.showErrorStack') ? { stack: stackTrace } : {}),
  });
};
