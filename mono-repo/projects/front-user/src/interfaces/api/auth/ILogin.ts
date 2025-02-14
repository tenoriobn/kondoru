import { FieldError, UseFormRegister } from 'react-hook-form';

export interface IUseLoginData {
  email: string;
  password: string;
}


/* eslint-disable no-unused-vars */
export interface ILoginInputsProps {
  register: UseFormRegister<IUseLoginData>;
  errors: {
    [K in keyof IUseLoginData]?: FieldError;
  },
  errorMessage: string;
}