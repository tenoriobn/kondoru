import { useEffect } from 'react';

/**
 * Hook para gerenciar a visibilidade do scroll do body.
 *
 * @param {boolean} shouldHideOverflow - Estado que define se o scroll do body deve ser desativado.
 */
function useBodyOverflow(shouldHideOverflow: boolean) {
  useEffect(() => {
    if (shouldHideOverflow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [shouldHideOverflow]);
}

export default useBodyOverflow;
