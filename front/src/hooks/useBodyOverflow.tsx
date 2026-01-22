import { useEffect } from 'react';

function useBodyOverflow(shouldHide: boolean) {
  useEffect(() => {
    document.body.style.overflow = shouldHide ? 'hidden' : '';
  }, [shouldHide]);
}

export default useBodyOverflow;
