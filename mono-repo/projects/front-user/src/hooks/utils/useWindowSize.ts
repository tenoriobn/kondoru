import { useState, useEffect } from 'react';

/**
 * Hook customizado para capturar o tamanho da janela e identificar se é mobile.
 *
 * @handleResize - Atualiza os valores dinamicamente ao redimensionar a janela.
 * @setWindowWidth - Atualiza `windowWidth` com a largura atual da janela.
 * @setIsMobile - Define `isMobile` como true se a largura for menor que o breakpoint fornecido.
 * 
 * @param {number} [breakpoint] - Largura máxima para considerar como mobile.
 * 
 * @returns {object} - { windowWidth, isMobile, setIsMobile }
 */

function useWindowSize(breakpoint: number = 992) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < breakpoint);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return { windowWidth, isMobile, setIsMobile };
}

export default useWindowSize;
