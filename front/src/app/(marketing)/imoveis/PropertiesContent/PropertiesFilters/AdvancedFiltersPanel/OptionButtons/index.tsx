import type { OptionButtonsProps } from './optionButtons.type';

export default function OptionButtons({ name, options, methods, isLoading }: OptionButtonsProps) {
  const isDisabled = isLoading || methods.formState.isSubmitting;
  const selected = methods.watch(name);

  function handleSelect(value: string) {
    methods.setValue(name, value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  return (
    <div className="flex flex-wrap gap-4">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          disabled={isDisabled}
          onClick={() => handleSelect(option.value)}
          className={`text-base md:text-xl text-dark-slate-900 font-semibold rounded-12 w-14 h-14 transition duration-300 ease-in-out 
            ${selected === option.value ? 'bg-white' : 'bg-gray-50'}
            ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-white-80 active:bg-white active:scale-90'}
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
