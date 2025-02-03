import { ReactNode } from 'react';

export interface ILabelProps {
  $padding?: string;
}

export interface IInputBoxProps extends ILabelProps {
  icon: ReactNode;
  children: ReactNode;
}