/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/appError';

export const errorHandler = async ( error: Error, req: Request, res: Response, next: NextFunction ): Promise<void> => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message });
    return;
  }

  console.error(error);

  res.status(500).json({ message: 'Erro interno do servidor' });
};
