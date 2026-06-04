'use client';
import type { FormEvent } from 'react';
import FilterDropdown from './FilterDropdown';
import useFilter from './useFilter';
import { FILTER_OPTIONS, PRICE_OPTIONS } from './filterMappings';

export default function Filter() {
  const {
    dropdownRef,
    openDropdown,
    selectedOptions,
    handleToggleDropdown,
    handleSelectOption,
    handleSubmit,
  } = useFilter();

  const priceOptions =
    selectedOptions.contrato === 'Venda'
      ? PRICE_OPTIONS.sale.map((item) => item.label)
      : PRICE_OPTIONS.rent.map((item) => item.label);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit();
  }

  return (
    <form
      ref={dropdownRef}
      onSubmit={onSubmit}
      aria-label="Filtro de busca"
      className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:items-center md:justify-center lgx:grid-cols-5 md:gap-y-7"
    >
      {FILTER_OPTIONS.map((filter) => (
        <FilterDropdown
          key={filter.id}
          id={filter.id}
          label={filter.label}
          options={filter.id === 'preco' ? priceOptions : [...filter.options]}
          selectedOption={selectedOptions[filter.id as keyof typeof selectedOptions]}
          canClear={filter.id !== 'contrato'}
          isOpen={openDropdown === filter.id}
          onToggle={() => handleToggleDropdown(filter.id)}
          onSelect={(value) => handleSelectOption(filter.id as keyof typeof selectedOptions, value)}
        />
      ))}

      <div className="flex justify-center h-full max-h-12 md:col-span-2 lgx:col-auto lgx:bg-slate-40 lgx:border-r lgx:border-slate-14 lgx:max-h-16 lgx:rounded-r-12 lgx:p-2">
        <button
          type="submit"
          className="cursor-pointer bg-dark-slate-84 text-white text-base md:text-xl font-semibold rounded-full p-2 w-full h-12 transition-all duration-300 ease-in-out z-9 md:max-w-62.5 hover:bg-dark-slate-900 active:bg-dark-slate-800 active:scale-90"
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}
