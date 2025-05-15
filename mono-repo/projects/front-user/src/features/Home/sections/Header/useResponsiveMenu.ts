import { useEffect, useState } from 'react';
import useBodyOverflow from 'Home/hooks/useBodyOverflow';
import useWindowSize from 'Home/hooks/useWindowSize';


/**
 * Hook customizado para gerenciar o comportamento responsivo do menu.
 *
 * @setMenuActive - Atualiza o estado para controlar a visibilidade do menu.
 * @isMobile - Retorna se está na versão mobile/tablet ou desktop.
 *
 * @returns {object} - { menuActive, setMenuActive }
 */

function useResponsiveMenu() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { isMobile } = useWindowSize();

  useBodyOverflow(isMobile ? isMenuActive : false);

  useEffect(() => {
    if (isMobile !== undefined && !isMobile) {
      setIsMenuActive(false);
    }
  }, [isMobile]);

  return { isMenuActive, setIsMenuActive, isMobile };
}

export default useResponsiveMenu;
