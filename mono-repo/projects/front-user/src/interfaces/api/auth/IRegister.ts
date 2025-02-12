import { FieldError, UseFormRegister } from 'react-hook-form';

export interface IUseRegisterData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  isChecked: boolean;
}

/* eslint-disable no-unused-vars */
export interface IRegistrationInputsProps {
  register: UseFormRegister<IUseRegisterData>;
  errors: {
    [K in keyof IUseRegisterData]?: FieldError;
  };
}
export interface IRegistrationTermProps {
  setAuthorization: (checked: boolean) => void;
}