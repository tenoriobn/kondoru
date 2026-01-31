import Link from 'next/link';
import { useAccessDropdown } from './useAccessDropdown';
import type { AccessDropdownProps } from './acessDropdown.type';
import ArrowDownIcon from 'public/icons/arrow-down.svg';
import UserIcon from 'public/icons/user.svg';
import UserPlusIcon from 'public/icons/user-plus.svg';

export default function AccessDropdown({ className, onItemClick }: AccessDropdownProps) {
  const { isOpenDropdown, dropdownRef, handleToggle } = useAccessDropdown();

  const accessLinks = [
    { href: '/login', label: 'Login', Icon: UserIcon },
    { href: '/cadastro', label: 'Cadastro', Icon: UserPlusIcon },
  ];

  return (
    <div className={`relative w-42 ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpenDropdown}
        aria-controls="access-dropdown"
        className={`cursor-pointer relative flex justify-between items-center gap-2 bg-white rounded-12 py-3 px-8 w-full h-full transition duration-300 ease-in-out hover:bg-white-80 active:bg-white active:scale-90 ${isOpenDropdown ? 'bg-white-80' : ''}`}
      >
        <span className="text-xl text-dark-slate-900 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
          Acessar
        </span>

        <ArrowDownIcon
          aria-hidden="true"
          className={`text-dark-slate-900 transition duration-300 ease-in-out ${isOpenDropdown ? 'rotate-180' : ''}`}
        />
      </button>

      <ul
        id="access-dropdown"
        onClick={handleToggle}
        className={`absolute block rounded-xl shadow-md bottom-[calc(100%+12px)] left-0 right-0 z-10 w-full overflow-hidden transition-[max-height] duration-300 ease-in-out lgx:bottom-auto lgx:top-[calc(100%+12px)] divide-y divide-gray-50/25 ${isOpenDropdown ? 'max-h-[176.48px]' : 'max-h-0'}`}
      >
        {accessLinks.map(({ href, label, Icon }) => (
          <li
            key={href}
            className="bg-white hover:bg-white-80 active:bg-white transition duration-300 ease-in-out"
          >
            <Link
              href={href}
              onClick={onItemClick}
              className="cursor-pointer flex items-center gap-2 text-xl text-dark-slate-900 font-medium py-3 px-6"
            >
              <Icon aria-hidden="true" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
