import { useEffect } from 'react';

/**
 * Hook para gerenciar a visibilidade do scroll do body.
 *
 * @param {boolean} shouldHide - Estado que define se o scroll do body deve ser desativado.
 */
function useBodyOverflow(shouldHide: boolean) {
  useEffect(() => {
    document.body.style.overflow = shouldHide ? 'hidden' : '';
  }, [shouldHide]);
}

export default useBodyOverflow;
