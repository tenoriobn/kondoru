import { InputHTMLAttributes, ReactNode } from 'react';

export type InputFieldProps = {
  id: string;
  label: string;
  icon: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export interface WithError {
  $errorMessage: boolean;
}