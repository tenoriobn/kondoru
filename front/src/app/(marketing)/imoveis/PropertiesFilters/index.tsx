import AdjustIcon from 'public/icons/adjust.svg';
import FunnelIcon from 'public/icons/funnel.svg';
import { useState } from 'react';
import AdvancedFiltersPanel from './AdvancedFiltersPanel';
import { useBodyOverflow } from 'src/hooks';

export default function PropertiesFilters() {
  const [isAdvancedFiltersPanel, setIsAdvancedFiltersPanel] = useState(false);
  const totalProperties = 34;

  useBodyOverflow(isAdvancedFiltersPanel);

  function handleToggleFilters() {
    setIsAdvancedFiltersPanel((prev) => !prev);
  }

  function handleCloseFilters() {
    setIsAdvancedFiltersPanel(false);
  }

  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-between">
      <p aria-live="polite" className="text-gray-600 text-base md:text-xl font-medium">
        {totalProperties} imóveis encontrados
      </p>

      <div className="flex flex-wrap items-center gap-4 md:gap-8">
        <button
          onClick={handleToggleFilters}
          aria-label="Abrir filtros"
          aria-controls="filters-panel"
          aria-expanded={isAdvancedFiltersPanel}
          className="cursor-pointer bg-dark-slate-84 text-white text-base md:text-xl font-semibold flex items-center justify-center gap-2 rounded-full py-4 px-8 transition-all duration-300 ease-in-out hover:bg-dark-slate-900 active:bg-dark-slate-800 active:scale-90"
        >
          <AdjustIcon aria-hidden="true" className="w-4 h-4 stroke-2" />
          Filtros avançados
        </button>

        <AdvancedFiltersPanel isOpen={isAdvancedFiltersPanel} onClose={handleCloseFilters} />

        <button
          aria-label="Ordenar imóveis"
          className="cursor-pointer bg-dark-slate-84 text-white text-base md:text-xl font-semibold flex items-center justify-center gap-2 rounded-full p-4 w-14 h-14 transition-all duration-300 ease-in-out hover:bg-dark-slate-900 active:bg-dark-slate-800 active:scale-90"
        >
          <FunnelIcon aria-hidden="true" className="stroke-2" />
        </button>
      </div>
    </div>
  );
}
