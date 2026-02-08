import Navbar from './Navbar';
import AccessDropdown from './AccessDropdown';
import { useHeaderMenu } from './useHeaderMenu';
import MobileMenuIcon from 'public/icons/menu-hamburguer.svg';
import Logo from 'src/components/Logo';

export default function Header() {
  const { isMobile, isMenuActive, setIsMenuActive } = useHeaderMenu();

  return (
    <header className="fixed flex items-center justify-center bg-dark-slate-800 w-full z-99">
      <div className="relative flex justify-between items-center mx-4 xs:mx-6 md:mx-16 py-6 max-w-6xl w-full">
        <Logo />

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isMenuActive}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuActive(true)}
          className="lgx:hidden text-gray-400 transition duration-300 ease-in-out hover:text-white-80 active:scale-90"
        >
          <MobileMenuIcon aria-hidden="true" />
        </button>

        <Navbar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} isMobile={isMobile} />

        {!isMobile && <AccessDropdown className="max-lgx:hidden" />}
      </div>
    </header>
  );
}
