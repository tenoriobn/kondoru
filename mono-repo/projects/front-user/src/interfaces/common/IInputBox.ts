import { ReactNode } from 'react';

export interface ILabelProps {
  $padding?: string;
  $hasError?: boolean;
}

export interface IInputBoxProps extends ILabelProps {
  icon: ReactNode;
  children: ReactNode;
  hasError?: boolean;
}