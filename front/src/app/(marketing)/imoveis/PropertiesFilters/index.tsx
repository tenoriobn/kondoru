import AdjustIcon from 'public/icons/adjust.svg';
import FunnelIcon from 'public/icons/funnel.svg';
import { useRef, useState } from 'react';
import AdvancedFiltersPanel from './AdvancedFiltersPanel';
import PropertySort from './PropertySort';
import { useBodyOverflow, useClickOutside } from 'src/hooks';
import type { PropertiesFiltersProps } from './propertiesFilters.type';
import type { PropertySortType } from './PropertySort/propertySort.type';

export default function PropertiesFilters({
  onApplyFilters,
  onSortChange,
  isLoading,
}: PropertiesFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<PropertySortType>('');

  const sortRef = useRef<HTMLDivElement>(null);
  const totalProperties = 12;

  useClickOutside(sortRef, () => setIsSortOpen(false));
  useBodyOverflow(isFiltersOpen);

  function handleSelectSort(value: PropertySortType) {
    setSelectedSort(value);
    setIsSortOpen(false);
    onSortChange(value);
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 justify-between">
      <p
        aria-live="polite"
        className="order-2 md:order-1 text-gray-600 text-base md:text-xl font-medium"
      >
        {totalProperties} imóveis encontrados
      </p>

      <div className="order-1 md:order-2 flex flex-wrap items-center gap-2 xs:gap-4 md:gap-8">
        <div>
          <button
            disabled={isLoading}
            onClick={() => setIsFiltersOpen(true)}
            aria-label="Abrir filtros"
            aria-controls="filters-panel"
            aria-expanded={isFiltersOpen}
            className={`
              flex-1 bg-dark-slate-84 text-white text-base md:text-xl font-semibold flex items-center justify-center gap-2 rounded-full py-4 px-8 transition-all duration-300 ease-in-out  w-full
              ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-dark-slate-900 active:bg-dark-slate-800 active:scale-90'}
            `}
          >
            <AdjustIcon aria-hidden="true" className="w-4 h-4 stroke-2" />
            Filtros avançados
          </button>

          <AdvancedFiltersPanel
            isOpen={isFiltersOpen}
            onClose={() => setIsFiltersOpen(false)}
            onApply={(filters) => {
              onApplyFilters(filters);
              setIsFiltersOpen(false);
            }}
            isLoading={isLoading}
          />
        </div>

        <div className="relative" ref={sortRef}>
          <button
            aria-label="Ordenar imóveis"
            disabled={isLoading}
            onClick={() => setIsSortOpen((v) => !v)}
            className={`
              bg-dark-slate-84 text-white flex items-center justify-center rounded-full p-4 w-14 h-14 
              ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-dark-slate-900 active:bg-dark-slate-800 active:scale-90'}
            `}
          >
            <FunnelIcon aria-hidden="true" className="stroke-2" />
          </button>

          <PropertySort
            isOpen={isSortOpen}
            selectedOption={selectedSort}
            onSelect={handleSelectSort}
          />
        </div>
      </div>
    </div>
  );
}
