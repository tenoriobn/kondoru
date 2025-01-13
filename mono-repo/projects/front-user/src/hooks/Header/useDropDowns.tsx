import { useState, useEffect, useRef } from 'react';

function useDropdowns(initialOptions: { [key: string]: string } = {}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>(initialOptions);

  const handleToggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleSelectOption = (id: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: value,
    }));
    setOpenDropdown(null);
  };

  const dropdownRef = useRef<HTMLFormElement | null>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleToggleDropdown(''); // Fecha qualquer dropdown aberto
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleToggleDropdown]);

  return {
    openDropdown,
    selectedOptions,
    handleToggleDropdown,
    handleSelectOption,
    dropdownRef,
  };
}

export default useDropdowns;
