import { Dispatch, SetStateAction } from 'react';

export interface ResponsiveMenuProps {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean | undefined;
}

export interface MenuLink {
  id: number;
  text: string;
  href: string;
}