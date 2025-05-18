import { FieldError, UseFormRegister } from 'react-hook-form';

export interface UseRegisterFormData {
  name: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
}