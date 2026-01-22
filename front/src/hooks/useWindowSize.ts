import { useState, useEffect } from 'react';

function useWindowSize(breakpoint = 992) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < breakpoint);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return { windowWidth, isMobile };
}

export default useWindowSize;
