import { useState, useEffect, useRef, useCallback } from 'react';

function useDropdowns() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>(
    {
      contrato: '',
      imovel: '',
      preco: '',
      localidade: '',
    },
  );

  const handleToggleDropdown = useCallback((id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  }, []);

  const handleSelectOption = useCallback((id: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: value,
    }));
    setOpenDropdown(null);
  }, []);

  const dropdownRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    openDropdown,
    selectedOptions,
    handleToggleDropdown,
    handleSelectOption,
    dropdownRef,
  };
}

export default useDropdowns;
