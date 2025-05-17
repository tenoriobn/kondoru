import { FieldError, UseFormRegister } from 'react-hook-form';

export interface UseLoginFormData {
  email: string;
  password: string;
}


export interface InputFieldProps {
  id: keyof UseLoginFormData;
  label: string;
  icon: React.ReactNode;
  type?: string;
  register: UseFormRegister<UseLoginFormData>;
  errors: {
    [K in keyof UseLoginFormData]?: FieldError;
  };
  errorMessage?: string;
  [key: string]: any;
}