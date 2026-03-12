import { InputField } from 'src/components/Inputs/InputField';
import ArrowDownIcon from 'public/icons/arrow-down.svg';

type RangeFilterProps = {
  minLabel: string;
  maxLabel: string;
};

export default function RangeFilter({ minLabel, maxLabel }: RangeFilterProps) {
  return (
    <>
      <div className="flex items-end max-md:flex-wrap gap-4">
        <InputField
          id={minLabel}
          type="text"
          label={minLabel}
          Icon={<ArrowDownIcon className="text-white w-4.5 h-2.5 stroke-2" />}
        />

        <InputField
          id={maxLabel}
          type="text"
          label={maxLabel}
          Icon={<ArrowDownIcon className="text-white w-4.5 h-2.5 stroke-2 rotate-180" />}
        />
      </div>

      <div className="relative w-full max-w-xl h-1 bg-gray-600 rounded-full mt-5">
        <div
          className="absolute h-full bg-white rounded-full"
          style={{ left: '10%', right: '10%' }}
        />

        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-white shadow-md cursor-pointer"
          style={{ left: '10%' }}
        />

        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-white shadow-md cursor-pointer"
          style={{ right: '10%' }}
        />
      </div>
    </>
  );
}
