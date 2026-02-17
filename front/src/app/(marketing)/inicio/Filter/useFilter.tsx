import { useState, useRef } from 'react';
import { useClickOutside } from 'src/hooks';

function useFilter() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

  const dropdownRef = useRef<HTMLFormElement | null>(null);

  const handleToggleDropdown = (id: string) => setOpenDropdown((prev) => (prev === id ? null : id));

  const handleSelectOption = (id: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [id]: value }));
    setOpenDropdown(null);
  };

  useClickOutside(dropdownRef, () => setOpenDropdown(null));

  return {
    openDropdown,
    selectedOptions,
    handleToggleDropdown,
    handleSelectOption,
    dropdownRef,
  };
}

export default useFilter;
