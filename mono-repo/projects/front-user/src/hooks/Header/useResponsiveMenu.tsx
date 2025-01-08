import { useEffect, useState } from 'react';

function useResponsiveMenu(breakpoint: number = 992) {
  const [isMobile, setIsMobile] = useState(true);
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Torna `false` padrão em telas > 992px
  useEffect(() => {
    const handleResize = () => {
      const checkMobile = (window.innerWidth < 992);

      if (checkMobile) { 
        setIsMenuActive(false); 
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  // Impede rolagem no body quando o menu é `true`.
  useEffect(() => {
    const body = document.body;
    body.style.overflow = `${isMenuActive ? 'hidden' : ''}`;
  }, [isMenuActive]);

  return { isMenuActive, setIsMenuActive, isMobile };
}

export default useResponsiveMenu;
