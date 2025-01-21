import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { stateActiveAuthForm } from 'src/store/atom';

function useResponsiveMenu(breakpoint: number = 992) {
  const [isMobile, setIsMobile] = useState(true);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const activeAuthForm = useRecoilValue(stateActiveAuthForm);

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

  useEffect(() => {
    const body = document.body;
    body.style.overflow = `${isMenuActive ? 'hidden' : ''}`;
  }, [isMenuActive]);

  useEffect(() => {
    if (activeAuthForm) {
      setIsMenuActive(false); 
    }
  }, [ activeAuthForm ]);

  return { isMenuActive, setIsMenuActive, isMobile };
}

export default useResponsiveMenu;
