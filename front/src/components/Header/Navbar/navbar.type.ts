import type { Dispatch, SetStateAction } from 'react';

export interface NavbarProps {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
  isMobile?: boolean;
}
