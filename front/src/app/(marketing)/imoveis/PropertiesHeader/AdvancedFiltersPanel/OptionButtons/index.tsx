type OptionButtonsProps = {
  options: string[];
};

export default function OptionButtons({ options }: OptionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {options.map((option, index) => (
        <button
          key={option}
          type="button"
          className={`cursor-pointer text-base md:text-xl text-dark-slate-900 font-semibold rounded-12 w-14 h-14 transition duration-300 ease-in-out hover:bg-white-80 active:bg-white active:scale-90 ${
            index === 0 ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
