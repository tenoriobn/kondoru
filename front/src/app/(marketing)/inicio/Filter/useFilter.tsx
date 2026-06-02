'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useClickOutside } from 'src/hooks';

import { CONTRACT_LABEL_TO_VALUE, PROPERTY_LABEL_TO_VALUE, PRICE_OPTIONS } from './filterMappings';

export interface SelectedOptions {
  contrato: string;
  imovel: string;
  preco: string;
  localidade: string;
}

export default function useFilter() {
  const router = useRouter();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    contrato: 'Aluguel',
    imovel: '',
    preco: '',
    localidade: '',
  });

  const dropdownRef = useRef<HTMLFormElement>(null);

  function handleToggleDropdown(id: string) {
    setOpenDropdown((prev) => (prev === id ? null : id));
  }

  function handleSelectOption(id: keyof SelectedOptions, value: string) {
    setSelectedOptions((prev) => {
      const next = {
        ...prev,
        [id]: value,
      };

      if (id === 'contrato') {
        next.preco = '';
      }

      return next;
    });

    setOpenDropdown(null);
  }

  function handleSubmit() {
    const params = new URLSearchParams();

    const contractType =
      CONTRACT_LABEL_TO_VALUE[selectedOptions.contrato as keyof typeof CONTRACT_LABEL_TO_VALUE];

    params.set('contractType', contractType);

    if (selectedOptions.imovel) {
      params.set(
        'propertyTypes',
        PROPERTY_LABEL_TO_VALUE[selectedOptions.imovel as keyof typeof PROPERTY_LABEL_TO_VALUE]
      );
    }

    if (selectedOptions.preco) {
      const selectedPrice = PRICE_OPTIONS[contractType].find(
        (item) => item.label === selectedOptions.preco
      );

      if (selectedPrice) {
        params.set('priceRangeMax', String(selectedPrice.value));
      }
    }

    if (selectedOptions.localidade) {
      params.set('location', selectedOptions.localidade);
    }

    router.push(`/imoveis?${params.toString()}`);
  }

  useClickOutside(dropdownRef, () => setOpenDropdown(null));

  return {
    dropdownRef,

    openDropdown,
    selectedOptions,

    handleToggleDropdown,
    handleSelectOption,
    handleSubmit,
  };
}
