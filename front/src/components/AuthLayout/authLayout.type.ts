import type { ReactNode } from 'react';

export interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  isSubmitting: boolean;
}
