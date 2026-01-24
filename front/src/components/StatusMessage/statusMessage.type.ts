import type { ComponentType, SVGProps } from 'react';

export interface StatusMessageProps {
  message: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  className: string;
}
