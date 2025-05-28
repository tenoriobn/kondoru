import { useState, useRef } from 'react';
import { useClickOutside } from 'src/features/Home/hooks/useClickOutside';

export function useAccessDropdown() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef, () => setIsOpenDropdown(false));

  const handleToggle = () => {
    setIsOpenDropdown(prev => !prev);
  };

  return {
    isOpenDropdown,
    dropdownRef,
    handleToggle
  };
}
