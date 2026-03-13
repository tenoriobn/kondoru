'use client';
import RangeInput from './RangeInput';
import ArrowDownIcon from 'public/icons/arrow-down.svg';
import type { RangeControlProps } from './rangeControl.type';
import { useRangeControl } from './useRangeControl';

export default function RangeControl({
  id,
  minLabel,
  maxLabel,
  minLimit,
  maxLimit,
  initialMin = minLimit,
  initialMax = maxLimit,
  prefix,
  suffix = '',
  methods,
}: RangeControlProps) {
  const {
    minVal,
    maxVal,
    minInput,
    maxInput,
    setMinVal,
    setMaxVal,
    setMinInput,
    setMaxInput,
    handleBlur,
    handleTrackClick,
    getPercent,
  } = useRangeControl({ id, minLimit, maxLimit, initialMin, initialMax, prefix, suffix, methods });

  const isSubmitting = methods.formState.isSubmitting;

  return (
    <div>
      <div
        className={`flex items-end max-md:flex-wrap gap-4 relative ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <RangeInput
          id={`${id}Min`}
          label={minLabel}
          value={minInput}
          isSubmitting={isSubmitting}
          onChange={(e) => setMinInput(e.target.value)}
          onBlur={() => handleBlur('min')}
          icon={<ArrowDownIcon className="w-4.5 h-2.5 stroke-2" />}
        />

        <RangeInput
          id={`${id}Max`}
          label={maxLabel}
          value={maxInput}
          isSubmitting={isSubmitting}
          onChange={(e) => setMaxInput(e.target.value)}
          onBlur={() => handleBlur('max')}
          icon={<ArrowDownIcon className="w-4.5 h-2.5 stroke-2 -rotate-180" />}
        />
      </div>

      <div
        className={`relative h-2 w-full flex items-center mt-5 ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        onMouseDown={!isSubmitting ? handleTrackClick : undefined}
      >
        <div className="absolute h-1.5 w-full bg-gray-600 rounded-full" />
        <div
          className="absolute h-1.5 bg-white rounded-full"
          style={{
            left: `${getPercent(minVal)}%`,
            width: `${getPercent(maxVal) - getPercent(minVal)}%`,
          }}
        />

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minVal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(Number(e.target.value), maxVal);
            setMinVal(value);
          }}
          disabled={isSubmitting}
          className={`
            z-40 absolute w-full h-0 appearance-none pointer-events-none outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:mt-0 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(0,0,0,0.3)]
            [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:relative [&::-moz-range-thumb]:shadow-[0_0_10px_rgba(0,0,0,0.3)]

            ${getPercent(minVal) > 50 ? 'z-50' : 'z-30'}

            ${
              isSubmitting
                ? `cursor-not-allowed [&::-webkit-slider-thumb]:cursor-not-allowed [&::-moz-range-thumb]:cursor-not-allowed`
                : ` cursor-pointer [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:cursor-pointer`
            }
          `}
        />

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxVal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(Number(e.target.value), minVal);
            setMaxVal(value);
          }}
          disabled={isSubmitting}
          className={`
            z-40 absolute w-full h-0 appearance-none pointer-events-none outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:mt-0 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(0,0,0,0.3)]
            [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:relative [&::-moz-range-thumb]:shadow-[0_0_10px_rgba(0,0,0,0.3)]

            ${getPercent(minVal) > 50 ? 'z-50' : 'z-30'}

            ${
              isSubmitting
                ? `cursor-not-allowed [&::-webkit-slider-thumb]:cursor-not-allowed [&::-moz-range-thumb]:cursor-not-allowed`
                : ` cursor-pointer [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:cursor-pointer`
            }
          `}
        />
      </div>
    </div>
  );
}
