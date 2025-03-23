import { Request } from 'express';

export interface UserData {
  name: string;
  email: string;
  date_of_birth: string;
  phone: string;
  id?: string;
}

export interface UserRegisterData extends UserData {
  password: string;
}

export type RegisterRequest = Request<object, UserRegisterData>;