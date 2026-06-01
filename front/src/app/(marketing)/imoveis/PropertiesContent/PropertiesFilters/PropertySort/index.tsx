import type { PropertySortProps } from './propertySort.type';
import { PROPERTY_SORT_OPTIONS } from './propertySortOptions';

export default function PropertySort({ isOpen, selectedOption, onSelect }: PropertySortProps) {
  return (
    <ul
      role="listbox"
      className={`
        absolute right-0 top-[calc(100%+12px)] z-10
        w-44 overflow-hidden rounded-xl bg-dark-slate-800 shadow-3xl
        transition-[max-height] duration-300 ease-in-out
        dropdown-scrollbar
        [--scrollbar-thumb:var(--color-slate-14)]
        [--scrollbar-track:var(--color-dark-slate-800)]
        ${isOpen ? 'max-h-48 animate-enable-scroll' : 'max-h-0'}
      `}
    >
      {PROPERTY_SORT_OPTIONS.map((option) => {
        const isSelected = selectedOption === option.value;

        return (
          <li
            key={option.value}
            role="option"
            aria-selected={isSelected}
            onClick={() => onSelect(option.value)}
            className={`
              cursor-pointer py-3 px-6 transition duration-300
              hover:bg-slate-40 hover:text-white
              ${isSelected ? 'bg-slate-14 text-white' : 'text-white-80'}
            `}
          >
            {option.label}
          </li>
        );
      })}
    </ul>
  );
}
