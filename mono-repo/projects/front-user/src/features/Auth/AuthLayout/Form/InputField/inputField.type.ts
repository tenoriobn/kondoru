import { InputHTMLAttributes, ReactNode } from 'react';

export type InputFieldProps = {
  id: string;
  label: string;
  icon: ReactNode;
  type: string;
} & InputHTMLAttributes<HTMLInputElement>;

export interface WithError {
  $errorMessage: boolean;
}