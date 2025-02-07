/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { stateActiveAuthForm } from 'src/store/atom';
import useWindowSize from '../utils/useWindowSize';
import useBodyOverflow from '../utils/useBodyOverflow';

/**
 * Hook customizado para gerenciar o comportamento responsivo do menu.
 *
 * @setIsMenuActive - Atualiza o estado `isMenuActive` para controlar a visibilidade do menu.
 * @useWindowSize - Define `isMenuActive` e `isMobile` com base na largura da janela.
 * @activeAuthForm - Fecha o menu automaticamente se um formulário de autenticação estiver ativo.
 * @useBodyOverflow - Desativa o scroll da página quando o menu está ativo.
 *
 * @returns {object} - { isMenuActive, setIsMenuActive, isMobile }
 */

function useResponsiveMenu() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { windowWidth, isMobile, setIsMobile } = useWindowSize();
  const activeAuthForm = useRecoilValue(stateActiveAuthForm);

  useBodyOverflow(isMenuActive || !!activeAuthForm);

  useEffect(() => {
    if (windowWidth > 992) {
      setIsMenuActive(false);
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  
    if (activeAuthForm.length > 0) {
      setIsMenuActive(false);
    }
  }, [windowWidth, isMenuActive, activeAuthForm]);

  return { isMenuActive, setIsMenuActive, isMobile };
}

export default useResponsiveMenu;