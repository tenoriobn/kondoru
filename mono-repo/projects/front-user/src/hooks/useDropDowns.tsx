import { useState, useRef } from 'react';
import { useClickOutside } from './utils/useClickOutside';

/**
 * Hook customizado para executar algumas funcionalidades relacionados ao DropDowns
 *
 * @handleToggleDropdown Abre/fecha o dropdown baseado no ID.
 * @handleSelectOption Atualiza o estado com a opção selecionada e fecha o dropdown.
 * @useClickOutside Fecha o dropdown ao clicar fora do container.
 * 
 * @returns {object} - { openDropdown, selectedOptions, handleToggleDropdown, handleSelectOption, dropdownRef }
 */

function useDropdowns() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

  const dropdownRef = useRef<HTMLFormElement | null>(null);

  const handleToggleDropdown = (id: string) => setOpenDropdown(prev => (prev === id ? null : id));

  const handleSelectOption = (id: string, value: string) => {
    setSelectedOptions(prev => ({ ...prev, [id]: value }));
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

export default useDropdowns;
