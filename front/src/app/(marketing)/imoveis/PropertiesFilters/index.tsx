import AdjustIcon from 'public/icons/adjust.svg';
import FunnelIcon from 'public/icons/funnel.svg';
import { useRef, useState, useCallback } from 'react';

import AdvancedFiltersPanel from './AdvancedFiltersPanel';
import PropertySort from './PropertySort';

import { useBodyOverflow, useClickOutside } from 'src/hooks';

import type { PropertySortType } from './propertiesFilters.type';

export default function PropertiesFilters() {
  const [isAdvancedFiltersPanel, setIsAdvancedFiltersPanel] = useState(false);
  const [openSortDropdown, setOpenSortDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState<PropertySortType>('');

  const sortDropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(sortDropdownRef, () => setOpenSortDropdown(false));
  useBodyOverflow(isAdvancedFiltersPanel);

  const totalProperties = 12;

  const handleToggleFilters = useCallback(() => {
    setIsAdvancedFiltersPanel((prev) => !prev);
  }, []);

  const handleCloseFilters = useCallback(() => {
    setIsAdvancedFiltersPanel(false);
  }, []);

  const handleToggleSortDropdown = useCallback(() => {
    setOpenSortDropdown((prev) => !prev);
  }, []);

  const handleSelectSort = useCallback((value: PropertySortType) => {
    setSelectedSort(value);
    setOpenSortDropdown(false);

    // fetchProperties({ sort: value })
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 justify-between">
      <p
        aria-live="polite"
        className="order-2 md:order-1 text-gray-600 text-base md:text-xl font-medium"
      >
        {totalProperties} imóveis encontrados
      </p>

      <div className="order-1 md:order-2 flex flex-wrap items-center gap-2 xs:gap-4 md:gap-8">
        <button
          onClick={handleToggleFilters}
          aria-label="Abrir filtros"
          aria-controls="filters-panel"
          aria-expanded={isAdvancedFiltersPanel}
          className="flex-1 cursor-pointer bg-dark-slate-84 text-white text-base md:text-xl font-semibold flex items-center justify-center gap-2 rounded-full py-4 px-8 transition-all duration-300 ease-in-out hover:bg-dark-slate-900 active:bg-dark-slate-800 active:scale-90 w-full"
        >
          <AdjustIcon aria-hidden="true" className="w-4 h-4 stroke-2" />
          Filtros avançados
        </button>

        <AdvancedFiltersPanel isOpen={isAdvancedFiltersPanel} onClose={handleCloseFilters} />

        <div className="relative" ref={sortDropdownRef}>
          <button
            aria-label="Ordenar imóveis"
            onClick={handleToggleSortDropdown}
            className="cursor-pointer bg-dark-slate-84 text-white flex items-center justify-center rounded-full p-4 w-14 h-14 hover:bg-dark-slate-900 active:scale-90"
          >
            <FunnelIcon aria-hidden="true" className="stroke-2" />
          </button>

          <PropertySort
            isOpen={openSortDropdown}
            selectedOption={selectedSort}
            onSelect={handleSelectSort}
          />
        </div>
      </div>
    </div>
  );
}
