import { Dispatch, SetStateAction } from 'react';

export interface IMenuMobile {
  $isMenuActive?: boolean;
  $setIsMenuActive?: Dispatch<SetStateAction<boolean>>;
  $isMobile?: boolean;
}

export interface IMenuLink {
  id: number;
  text: string;
  href: string;
}