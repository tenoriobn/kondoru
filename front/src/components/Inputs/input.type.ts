import type { ReactElement, SVGProps } from 'react';

export interface InputProps {
  id: string;
  label: string;
  Icon: ReactElement<SVGProps<SVGSVGElement>>;
}

export interface StyledProps {
  $errorMessage: boolean;
}
