import Link from 'next/link';
import menuLinks from './menuLinks.json';
import { usePathname } from 'next/navigation';
import Logo from 'public/icons/logotipo.svg';
import CloseIcon from 'public/icons/close.svg';
import type { NavbarProps } from './navbar.type';
import AccessDropdown from '../AccessDropdown';

export default function Navbar({ isMenuActive, setIsMenuActive, isMobile }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav
      id="primary-navigation"
      aria-label="Navegação principal"
      className={`
        max-lgx:bg-header max-lgx:bg-cover max-lgx:bg-center  max-lgx:flex max-lgx:flex-col max-lgx:items-center max-lgx:justify-between max-lgx:gap-24 max-lgx:fixed max-lgx:inset-0 max-lgx:w-full max-lgx:h-full max-lgx:min-h-dvh max-lgx:overflow-y-auto max-lgx:z-99 max-lgx:px-4 max-lgx:xs:px-6 max-lgx:md:px-16 max-lgx:py-6 
        ${isMobile ? 'max-lgx:transition-transform max-lgx:duration-300 max-lgx:ease-in-out' : ''}
        ${isMenuActive ? 'max-lgx:translate-x-0' : 'max-lgx:-translate-x-full'}
      `}
    >
      {isMobile && (
        <div className="flex justify-between items-center w-full lgx:hidden">
          <Link href="/" aria-label="Página inicial">
            <Logo className="w-35 md:w-42" />
          </Link>

          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsMenuActive(false)}
            className="text-gray-400 transition duration-300 ease-in-out hover:text-white-80 active:scale-90"
          >
            <CloseIcon aria-hidden="true" />
          </button>
        </div>
      )}

      <ul className="flex flex-col items-center gap-8 lgx:flex-row">
        {menuLinks.map((link) => (
          <li key={link.id}>
            <Link
              onClick={() => setIsMenuActive(false)}
              href={link.href}
              className={`text-xl font-medium transition duration-300 ease-in-out ${pathname === link.href ? 'text-white' : 'text-gray-400 hover:text-white-80 active:text-white'}`}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      {isMobile && (
        <AccessDropdown onItemClick={() => setIsMenuActive(false)} className="lgx:hidden" />
      )}
    </nav>
  );
}
