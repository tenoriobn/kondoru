'use client';
import type { AdvancedFiltersPanelProps } from './advancedFiltersPanel.type';
import CloseIcon from 'public/icons/close.svg';
import LocationIcon from 'public/icons/location.svg';
import LoadingIcon from 'public/icons/loading.svg';
import Form from 'src/components/Form';
import { InputField } from 'src/components/Inputs/InputField';
import FilterSection from './FilterSection';
import PropertyTypeCheckboxGroup from './PropertyTypeCheckboxGroup';
import RangeControl from './RangeControl';
import OptionButtons from './OptionButtons';
import { useAdvancedFiltersForm } from './useAdvancedFiltersForm';
import {
  CONTRACT_OPTIONS,
  PROPERTY_TYPES,
  BEDROOM_OPTIONS,
  BATHROOM_OPTIONS,
  GARAGE_OPTIONS,
  FURNISHED_OPTIONS,
  METRO_OPTIONS,
} from './propertyFilters';

export default function AdvancedFiltersPanel({
  isOpen,
  onClose,
  onApply,
  isLoading,
}: AdvancedFiltersPanelProps) {
  const methods = useAdvancedFiltersForm();
  const { watch, setValue, reset, handleSubmit } = methods;
  const contractType = watch('contractType');

  return (
    <div
      className={`fixed inset-0 z-100 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/50" />

      <aside
        id="filters-panel"
        className={`h-dvh bg-dark-slate-800 md:rounded-l-3xl md:border-l md:border-[rgba(189,189,189,0.16)] md:shadow-xl md:max-w-130 w-full absolute top-0 right-0 flex flex-col transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className="flex items-center justify-between p-4 md:p-8 border-b border-[rgba(189,189,189,0.16)] shadow-sm shrink-0">
          <h2 className="text-white text-xl md:text-2xl font-bold">Filtros avançados</h2>

          <button
            onClick={onClose}
            aria-label="Fechar filtros"
            className="cursor-pointer text-gray-400 hover:text-white-80 active:scale-90 transition"
          >
            <CloseIcon aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto dropdown-scrollbar [--scrollbar-thumb:var(--color-slate-14)] [--scrollbar-track:var(--color-dark-slate-800)]">
          <Form
            id="advanced-filters-form"
            className="p-4 md:p-8 grid gap-8"
            methods={methods}
            onSubmit={handleSubmit(onApply)}
            noValidate
          >
            <InputField
              id="location"
              type="text"
              label="Buscar por localidade..."
              Icon={<LocationIcon className="w-6 h-6" />}
              isLoading={isLoading}
            />

            <FilterSection title="Contrato">
              <div className="flex gap-4">
                {CONTRACT_OPTIONS.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    disabled={isLoading}
                    onClick={() =>
                      setValue('contractType', value, {
                        shouldDirty: true,
                        shouldValidate: true,
                      })
                    }
                    className={`text-base md:text-xl text-dark-slate-900 font-semibold rounded-12 py-3 px-8 w-full transition ${
                      contractType === value ? 'bg-white' : 'bg-gray-50'
                    } ${
                      isLoading
                        ? 'cursor-not-allowed'
                        : 'cursor-pointer hover:bg-white-80 active:bg-white active:scale-90'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Tipo do Imóvel">
              <PropertyTypeCheckboxGroup
                types={PROPERTY_TYPES}
                methods={methods}
                isLoading={isLoading}
              />
            </FilterSection>

            <FilterSection title="Faixa de Preço">
              <RangeControl
                id="priceRange"
                minLabel="Mínimo"
                maxLabel="Máximo"
                minLimit={contractType === 'rent' ? 500 : 150000}
                maxLimit={contractType === 'rent' ? 25000 : 20000000}
                prefix="R$"
                methods={methods}
                isLoading={isLoading}
              />
            </FilterSection>

            <FilterSection title="Área do Imóvel">
              <RangeControl
                id="propertyArea"
                minLabel="Mínimo m²"
                maxLabel="Máximo m²"
                minLimit={20}
                maxLimit={1000}
                suffix="m²"
                methods={methods}
                isLoading={isLoading}
              />
            </FilterSection>

            <FilterSection title="Quartos">
              <OptionButtons
                name="bedrooms"
                options={BEDROOM_OPTIONS}
                methods={methods}
                isLoading={isLoading}
              />
            </FilterSection>

            <FilterSection title="Banheiros">
              <OptionButtons
                name="bathrooms"
                options={BATHROOM_OPTIONS}
                methods={methods}
                isLoading={isLoading}
              />
            </FilterSection>

            <FilterSection title="Vagas de Garagem">
              <OptionButtons
                name="garageSpots"
                options={GARAGE_OPTIONS}
                methods={methods}
                isLoading={isLoading}
              />
            </FilterSection>

            <FilterSection title="Mobiliado">
              <OptionButtons
                name="furnished"
                options={FURNISHED_OPTIONS}
                methods={methods}
                isLoading={isLoading}
              />
            </FilterSection>

            <FilterSection title="Próximo ao Metrô">
              <OptionButtons
                name="nearMetro"
                options={METRO_OPTIONS}
                methods={methods}
                isLoading={isLoading}
              />
            </FilterSection>
          </Form>
        </div>

        <footer className="flex items-center gap-4 p-4 md:p-8 border-t border-[rgba(189,189,189,0.16)] shrink-0">
          <button
            type="button"
            onClick={() => reset()}
            disabled={isLoading}
            className={`text-base md:text-xl text-dark-slate-900 font-semibold bg-gray-50 rounded-12 py-3 px-8 w-full transition ${
              isLoading
                ? 'cursor-not-allowed'
                : 'cursor-pointer hover:bg-white-80 active:bg-white active:scale-90'
            }`}
          >
            Limpar
          </button>

          <button
            type="submit"
            form="advanced-filters-form"
            disabled={isLoading}
            className={`text-base md:text-xl text-dark-slate-900 font-semibold bg-gray-50 rounded-12 py-3 px-8 w-full transition ${
              isLoading
                ? 'bg-white cursor-not-allowed'
                : 'cursor-pointer hover:bg-white-80 active:bg-white active:scale-90'
            }`}
          >
            {isLoading ? (
              <LoadingIcon className="justify-self-center w-6 text-dark-slate-900" />
            ) : (
              'Aplicar'
            )}
          </button>
        </footer>
      </aside>
    </div>
  );
}
