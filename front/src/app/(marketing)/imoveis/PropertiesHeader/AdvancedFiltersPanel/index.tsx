'use client';
import { useState } from 'react';
import Form from 'src/components/Form';
import { InputField } from 'src/components/Inputs/InputField';
import { useAdvancedFiltersForm } from './useAdvancedFiltersForm';
import CloseIcon from 'public/icons/close.svg';
import LocationIcon from 'public/icons/location.svg';
import PropertyTypeCheckboxGroup from './PropertyTypeCheckboxGroup';
import RangeFilter from './RangeField';
import OptionButtons from './OptionButtons';
import FilterSection from './FilterSection';

type AdvancedFiltersPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AdvancedFiltersPanel({ isOpen, onClose }: AdvancedFiltersPanelProps) {
  const { methods, onSubmit } = useAdvancedFiltersForm();
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(['Apartamento']);

  const PROPERTY_TYPES = ['Apartamento', 'Casa', 'Terreno', 'Comercial', 'Galpão', 'Sítio'];
  const BEDROOM_OPTIONS = ['1+', '2+', '3+', '4+'];
  const BATHROOM_OPTIONS = ['1+', '2+', '3+', '4+'];
  const GARAGE_OPTIONS = ['N/A', '1+', '2+', '3+', '4+'];
  const FURNISHED_OPTIONS = ['N/A', 'Sim', 'Não'];
  const METRO_OPTIONS = ['N/A', 'Sim', 'Não'];

  function handleTogglePropertyType(type: string) {
    setSelectedPropertyTypes((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    );
  }

  return (
    <div
      className={`
        fixed inset-0 z-100
        transition-opacity duration-300
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
      />

      <aside
        id="filters-panel"
        className={`h-dvh bg-dark-slate-800 md:rounded-l-3xl md:border-l md:border-[rgba(189,189,189,0.16)] md:shadow-xl max-w-130 w-full absolute top-0 right-0 flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <header className="flex items-center justify-between p-4 md:p-8 border-b border-[rgba(189,189,189,0.16)] shadow-sm shrink-0">
          <h2 className="text-white text-xl md:text-2xl font-bold">Filtros avançados</h2>

          <button
            onClick={onClose}
            aria-label="Fechar filtros"
            className="cursor-pointer text-gray-400 transition duration-300 ease-in-out hover:text-white-80 active:scale-90"
          >
            <CloseIcon aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto dropdown-scrollbar [--scrollbar-thumb:var(--color-slate-14)] [--scrollbar-track:var(--color-dark-slate-800)]">
          <Form
            className="p-4 md:p-8 grid gap-8"
            methods={methods}
            onSubmit={methods.handleSubmit(onSubmit)}
            noValidate
          >
            <InputField
              id="location"
              type="text"
              label="Buscar por localidade..."
              Icon={<LocationIcon className="w-6 h-6" />}
            />

            <FilterSection title="Contrato">
              <div className="flex gap-4">
                <button className="cursor-pointer text-base md:text-xl text-dark-slate-900 font-semibold bg-white rounded-12 py-3 px-8 w-full transition duration-300 hover:bg-white-80 active:bg-white active:scale-90">
                  Venda
                </button>

                <button className="cursor-pointer text-base md:text-xl text-dark-slate-900 font-semibold bg-gray-50 rounded-12 py-3 px-8 w-full transition duration-300 hover:bg-white-80 active:bg-white active:scale-90">
                  Aluguel
                </button>
              </div>
            </FilterSection>

            <FilterSection title="Tipo do Imóvel">
              <PropertyTypeCheckboxGroup
                types={PROPERTY_TYPES}
                selectedTypes={selectedPropertyTypes}
                onToggle={handleTogglePropertyType}
              />
            </FilterSection>

            <FilterSection title="Faixa de Preço">
              <RangeFilter minLabel="Mínimo" maxLabel="Máximo" />
            </FilterSection>

            <FilterSection title="Área do imóvel">
              <RangeFilter minLabel="Mínimo m²" maxLabel="Máximo m²" />
            </FilterSection>

            <FilterSection title="Quartos">
              <OptionButtons options={BEDROOM_OPTIONS} />
            </FilterSection>

            <FilterSection title="Banheiros">
              <OptionButtons options={BATHROOM_OPTIONS} />
            </FilterSection>

            <FilterSection title="Vagas de Garagem">
              <OptionButtons options={GARAGE_OPTIONS} />
            </FilterSection>

            <FilterSection title="Mobiliado">
              <OptionButtons options={FURNISHED_OPTIONS} />
            </FilterSection>

            <FilterSection title="Próximo ao Metrô">
              <OptionButtons options={METRO_OPTIONS} />
            </FilterSection>
          </Form>
        </div>

        <footer className="flex items-center gap-4 p-4 md:p-8 border-t border-[rgba(189,189,189,0.16)] shrink-0">
          <button className="cursor-pointer text-base md:text-xl text-dark-slate-900 font-semibold bg-white rounded-12 py-3 px-8 w-full transition duration-300 hover:bg-white-80 active:bg-white active:scale-90">
            Limpar
          </button>

          <button className="cursor-pointer text-base md:text-xl text-dark-slate-900 font-semibold bg-gray-50 rounded-12 py-3 px-8 w-full transition duration-300 hover:bg-white-80 active:bg-white active:scale-90">
            Aplicar
          </button>
        </footer>
      </aside>
    </div>
  );
}
