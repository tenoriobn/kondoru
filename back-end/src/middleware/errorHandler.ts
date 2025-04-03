/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express';
import AppError from '../utils/appError';
import { DatabaseError, ValidationError } from 'sequelize';

export const errorHandler = async (error: Error, req: Request, res: Response, next: NextFunction): Promise<void> => {
  if (error instanceof ValidationError) {
    res.status(400).json({ message: error.errors.map(err => err.message).join(', ') });
    return;
  }

  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message });
    return;
  }

  console.error(error);

  res.status(500).json({ message: 'Erro interno do servidor' });
};
