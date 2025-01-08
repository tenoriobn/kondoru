export interface IMenuMobile {
  $isMenuActive?: boolean;
  $setIsMenuActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IMenuLink {
  id: number;
  text: string;
  href: string;
}