import { AccessLink } from './acessDropdown.type';
import UserIcon from 'public/icons/user.svg';
import UserPlusIcon from 'public/icons/user-plus.svg';

export const accessLinks: AccessLink[] = [
  { href: '/auth/login', label: 'Login', Icon: UserIcon },
  { href: '/auth/cadastro', label: 'Cadastro', Icon: UserPlusIcon },
];