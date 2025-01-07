import { useEffect, useState } from 'react';

function useResponsiveMenu(breakpoint: number = 992) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Torna `false` padrão em telas > 992px
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia(`(min-width: ${breakpoint}px)`).matches) {
        setIsMenuActive(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  // Impede rolagem no body quando o menu é `true`.
  useEffect(() => {
    const body = document.body
    body.style.overflow = `${isMenuActive ? 'hidden' : ''}`;

    return () => {
      body.style.overflow = '';
    };
  }, [isMenuActive]);

  return { isMenuActive, setIsMenuActive };
}

export default useResponsiveMenu;
