import { useEffect, useState } from 'react';
import { useWindowSize, useBodyOverflow } from 'src/hooks';

export function useHeaderMenu() {
  const { isMobile } = useWindowSize();
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (!isMobile && isMenuActive) {
      setIsMenuActive(false);
    }
  }, [isMobile, isMenuActive]);

  useBodyOverflow(isMobile ? isMenuActive : false);

  return {
    isMobile,
    isMenuActive,
    setIsMenuActive,
  };
}
