import { ReactNode } from 'react';

export interface LabelProps {
  $padding?: string;
  $hasError?: boolean;
}

export interface InputBoxProps extends LabelProps {
  icon: ReactNode;
  children: ReactNode;
  hasError?: boolean;
}