import type { UseRangeControlParams } from './rangeControl.type';

export function useRangeControl({
  id,
  minLimit,
  maxLimit,
  prefix,
  suffix = '',
  methods,
}: UseRangeControlParams) {
  const minVal = methods.watch(`${id}Min`) ?? minLimit;
  const maxVal = methods.watch(`${id}Max`) ?? maxLimit;

  const safeMinVal = Math.min(Math.max(minVal, minLimit), maxLimit);

  const safeMaxVal = Math.min(Math.max(maxVal, minLimit), maxLimit);

  const formatDisplay = (val: number): string => {
    const formatted = val.toLocaleString('pt-BR');

    if (prefix && suffix) return `${prefix} ${formatted} ${suffix}`;
    if (prefix) return `${prefix} ${formatted}`;
    if (suffix) return `${formatted} ${suffix}`;

    return formatted;
  };

  const parseDisplay = (value: string) => {
    const numeric = value.replace(/[^\d]/g, '');

    return parseInt(numeric, 10) || 0;
  };

  const handleMinChange = (value: number) => {
    methods.setValue(`${id}Min`, Math.min(value, maxVal), {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleMaxChange = (value: number) => {
    methods.setValue(`${id}Max`, Math.max(value, minVal), {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleBlur = (type: 'min' | 'max', displayValue: string) => {
    let value = parseDisplay(displayValue);

    if (type === 'min') {
      if (value < minLimit) value = minLimit;
      if (value > maxVal) value = maxVal;

      handleMinChange(value);

      return;
    }

    if (value > maxLimit) value = maxLimit;
    if (value < minVal) value = minVal;

    handleMaxChange(value);
  };

  const getPercent = (value: number) => ((value - minLimit) / (maxLimit - minLimit)) * 100;

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const clickX = e.clientX - rect.left;

    const percent = clickX / rect.width;

    const value = Math.round(minLimit + percent * (maxLimit - minLimit));

    const distToMin = Math.abs(value - minVal);
    const distToMax = Math.abs(value - maxVal);

    if (distToMin < distToMax) {
      handleMinChange(value);
    } else {
      handleMaxChange(value);
    }
  };

  return {
    minVal: safeMinVal,
    maxVal: safeMaxVal,

    minDisplay: formatDisplay(safeMinVal),
    maxDisplay: formatDisplay(safeMaxVal),

    handleMinChange,
    handleMaxChange,
    handleBlur,
    handleTrackClick,
    getPercent,
  };
}
