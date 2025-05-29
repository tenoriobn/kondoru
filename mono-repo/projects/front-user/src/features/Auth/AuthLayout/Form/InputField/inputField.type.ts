import { InputHTMLAttributes, ReactNode } from 'react';

export type InputFieldProps = {
  id: string;
  label: string;
  icon: ReactNode;
  maxWidth?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export interface StyledProps {
  $errorMessage: boolean;
  $maxWidth?: string;
}