import { Request, Response } from 'express';
import { DatabaseError } from '../../../errors/database.error';
import { HttpError } from '../../../errors/http.error';

export const errorMiddleware = (error: HttpError | DatabaseError, request: Request, response: Response): void => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  response.status(status).send({
    status,
    message
  });
};
