import Dropdown from './Dropdown';
import useDropdowns from './useDropDowns';
import dropdowns from './dropdowns.json';

export default function Filter() {
  const { openDropdown, selectedOptions, handleToggleDropdown, handleSelectOption, dropdownRef } =
    useDropdowns();

  return (
    <form
      ref={dropdownRef}
      aria-label="Filtro de busca"
      className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:items-center md:justify-center lgx:grid-cols-5 md:gap-y-7"
    >
      {dropdowns.map((dropdown) => (
        <Dropdown
          key={dropdown.id}
          id={dropdown.id}
          label={dropdown.label}
          options={dropdown.options}
          selectedOption={selectedOptions[dropdown.id]}
          isOpen={openDropdown === dropdown.id}
          onToggle={() => handleToggleDropdown(dropdown.id)}
          onSelect={(value) => handleSelectOption(dropdown.id, value)}
        />
      ))}

      <div className="flex justify-center h-full max-h-12 md:col-span-2  lgx:col-auto lgx:bg-slate-40 lgx:border-r lgx:border-slate-14 lgx:max-h-16 lgx:rounded-r-12 lgx:p-2">
        <button
          type="submit"
          className="cursor-pointer bg-dark-slate-84 text-white text-base font-semibold rounded-full p-2 w-full h-12 transition-all duration-300 ease-in-out z-9 md:text-[1.25rem] md:max-w-62.5 hover:bg-dark-slate-900 active:bg-dark-slate-800"
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}
