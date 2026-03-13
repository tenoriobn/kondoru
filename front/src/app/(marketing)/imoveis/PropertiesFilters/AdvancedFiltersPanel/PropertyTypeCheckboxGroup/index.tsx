import CheckboxIcon from 'public/icons/checkbox.svg';
import type { PropertyTypeCheckboxGroupProps } from './propertyTypeCheckboxGroup.type';

export default function PropertyTypeCheckboxGroup({
  types,
  methods,
}: PropertyTypeCheckboxGroupProps) {
  const isSubmitting = methods.formState.isSubmitting;
  const selectedTypes = methods.watch('propertyTypes') ?? [];

  function handleTogglePropertyType(value: string) {
    const current = methods.getValues('propertyTypes') ?? [];

    const updated = current.includes(value)
      ? current.filter((item: string) => item !== value)
      : [...current, value];

    methods.setValue('propertyTypes', updated, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {types.map((type) => {
        const isChecked = selectedTypes.includes(type.value);

        return (
          <label
            key={type.value}
            className={`flex items-center select-none ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <input
              type="checkbox"
              className="peer sr-only"
              checked={isChecked}
              onChange={() => handleTogglePropertyType(type.value)}
              disabled={isSubmitting}
            />

            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors duration-300 
                ${isChecked ? 'bg-white border-white' : 'bg-transparent border-gray-600 border-2'}
              `}
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
              {type.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}
