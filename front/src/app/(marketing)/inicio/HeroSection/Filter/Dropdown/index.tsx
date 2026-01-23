import ArrowDownIcon from 'public/icons/arrow-down.svg';
import type { DropdownProps } from './dropdown.type';

export default function Dropdown({
  label,
  options,
  selectedOption,
  isOpen,
  onToggle,
  onSelect,
}: DropdownProps) {
  return (
    <div className="group relative w-full h-full max-h-14 lgx:max-h-16">
      <div
        onClick={onToggle}
        title={selectedOption || label}
        className={`
          grid grid-cols-[1fr_auto] items-center justify-between gap-6 cursor-pointer border-r border-slate-14 rounded-12 relative h-full px-6 py-2 transition-colors duration-300 ease-in-out hover:bg-dark-slate-900
          md:rounded-none md:group-nth-of-type-[odd]:rounded-l-12 md:group-nth-of-type-[even]:rounded-r-12
          lgx:rounded-none lgx:group-first:rounded-l-12 lgx:group-not-first:rounded-none
          ${isOpen ? 'bg-dark-slate-800' : 'bg-slate-40'}
        `}
      >
        <label className="text-white-80 text-[1.25rem] whitespace-nowrap overflow-hidden text-ellipsis max-w-full cursor-pointer">
          {selectedOption || label}
        </label>

        <ArrowDownIcon
          className={`transition-transform duration-300 ease-in-out text-white-80 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      <ul
        className={`
          absolute left-0 right-0 z-10 block top-[calc(100%+12px)] bg-dark-slate-800 rounded-xl shadow-3xl transition-[max-height] duration-300 ease-in-out dropdown-scrollbar overflow-hidden 
          ${isOpen ? 'max-h-48 animate-enable-scroll' : 'max-h-0'}
        `}
      >
        {selectedOption && (
          <li
            onClick={() => onSelect('')}
            title="Limpar Filtro"
            className={`cursor-pointer text-white-80 py-3 px-6 transition duration-300 ease-in-out hover:bg-slate-40 hover:text-white`}
          >
            Limpar Filtro
          </li>
        )}

        {options.map((option) => (
          <li
            key={option}
            onClick={() => onSelect(option)}
            title={option}
            className={`cursor-pointer text-white-80 py-3 px-6 transition duration-300 ease-in-out hover:bg-slate-40 hover:text-white  ${selectedOption === option && 'bg-slate-14 text-white'}`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
