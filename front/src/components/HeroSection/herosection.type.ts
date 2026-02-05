import type { ReactNode } from 'react';

export interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
}
