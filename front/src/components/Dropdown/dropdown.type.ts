import type { ReactNode } from 'react';

export interface DropdownOption {
  value: string;
  text: string;
}

export interface DropdownProps {
  name: string;
  label: string;
  icon: ReactNode;
  options: DropdownOption[];
}
