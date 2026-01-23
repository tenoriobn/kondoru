'use client';
import Logo from 'public/icons/logotipo.svg';
import MobileMenuIcon from 'public/icons/menu-hamburguer.svg';
import Navbar from './Navbar';
import { useState } from 'react';
import AccessDropdown from './AccessDropdown';
import useWindowSize from 'src/hooks/useWindowSize';
import useBodyOverflow from 'src/hooks/useBodyOverflow';
import Link from 'next/link';

export default function Header() {
  const { isMobile } = useWindowSize();
  const [isMenuActive, setIsMenuActive] = useState(false);

  if (isMenuActive && isMobile === false) setIsMenuActive(false);
  useBodyOverflow(isMobile ? isMenuActive : false);

  return (
    <header className="fixed flex items-center justify-center bg-dark-slate-800 w-full z-99">
      <div className="relative flex justify-between items-center mx-4 xs:mx-6 md:mx-16 py-6 max-w-6xl w-full">
        <Link href="/" aria-label="Página inicial">
          <Logo className="w-35 md:w-42" />
        </Link>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isMenuActive}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuActive(true)}
          className="lgx:hidden text-gray-400 transition hover:text-white-80 active:scale-90"
        >
          <MobileMenuIcon aria-hidden="true" />
        </button>

        <Navbar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} isMobile={isMobile} />

        {!isMobile && <AccessDropdown className="max-lgx:hidden" />}
      </div>
    </header>
  );
}
