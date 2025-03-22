import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  userId?: string;
  userEmail?: string;
}

export interface AuthData {
  email: string;
  password: string;
}