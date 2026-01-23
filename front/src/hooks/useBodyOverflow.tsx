import { useEffect } from 'react';

export function useBodyOverflow(shouldHide: boolean) {
  useEffect(() => {
    document.body.style.overflow = shouldHide ? 'hidden' : '';
  }, [shouldHide]);
}
