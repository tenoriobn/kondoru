import { FieldError, UseFormRegister } from 'react-hook-form';

export interface IUseLoginData {
  email: string;
  password: string;
}

export interface ILoginInputsProps {
  register: UseFormRegister<IUseLoginData>;
  errors: {
    [K in keyof IUseLoginData]?: FieldError;
  },
  errorMessage: string;
}