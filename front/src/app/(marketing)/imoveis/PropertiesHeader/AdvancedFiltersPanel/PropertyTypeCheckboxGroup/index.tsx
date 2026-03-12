import CheckboxIcon from 'public/icons/checkbox.svg';

type PropertyTypeCheckboxGroupProps = {
  types: string[];
  selectedTypes: string[];
  onToggle: (type: string) => void;
};

export default function PropertyTypeCheckboxGroup({
  types,
  selectedTypes,
  onToggle,
}: PropertyTypeCheckboxGroupProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {types.map((type) => {
        const isChecked = selectedTypes.includes(type);

        return (
          <label key={type} className="flex items-center cursor-pointer select-none">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={isChecked}
              onChange={() => onToggle(type)}
            />

            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors duration-300 ${
                isChecked ? 'bg-white border-white' : 'bg-transparent border-gray-600 border-2'
              }`}
            >
              <CheckboxIcon
                className={`transition-opacity duration-300 ${
                  isChecked ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>

            <span
              className={`ml-2 text-base md:text-xl font-medium transition-colors duration-300 ${
                isChecked ? 'text-white' : 'text-gray-50'
              }`}
            >
              {type}
            </span>
          </label>
        );
      })}
    </div>
  );
}
