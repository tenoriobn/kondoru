import { useState, useEffect } from 'react';
import type { UseRangeControlParams } from './rangeControl.type';

export function useRangeControl({
  id,
  minLimit,
  maxLimit,
  initialMin,
  initialMax,
  prefix,
  suffix = '',
  methods,
}: UseRangeControlParams) {
  const [minVal, setMinVal] = useState(initialMin);
  const [maxVal, setMaxVal] = useState(initialMax);

  const [minInput, setMinInput] = useState<string>('');
  const [maxInput, setMaxInput] = useState<string>('');

  const formatDisplay = (val: number): string => {
    const formatted = val.toLocaleString('pt-BR');

    if (prefix && suffix) return `${prefix} ${formatted} ${suffix}`;
    if (prefix) return `${prefix} ${formatted}`;
    if (suffix) return `${formatted} ${suffix}`;

    return formatted;
  };

  const parseDisplay = (str: string) => {
    const numeric = str.replace(/[^\d]/g, '');
    return parseInt(numeric, 10) || 0;
  };

  useEffect(() => {
    setMinInput(formatDisplay(minVal));
    setMaxInput(formatDisplay(maxVal));
    methods.setValue(`${id}Min`, minVal, { shouldDirty: true });
    methods.setValue(`${id}Max`, maxVal, { shouldDirty: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minVal, maxVal, id, methods]);

  const handleBlur = (type: 'min' | 'max') => {
    let value = parseDisplay(type === 'min' ? minInput : maxInput);

    if (type === 'min') {
      if (value < minLimit) value = minLimit;
      if (value > maxVal) value = maxVal;

      setMinVal(value);
      setMinInput(formatDisplay(value));
    } else {
      if (value > maxLimit) value = maxLimit;
      if (value < minVal) value = minVal;

      setMaxVal(value);
      setMaxInput(formatDisplay(value));
    }
  };

  const getPercent = (value: number) =>
    Math.round(((value - minLimit) / (maxLimit - minLimit)) * 100);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;

    const value = Math.round(minLimit + percent * (maxLimit - minLimit));

    const distToMin = Math.abs(value - minVal);
    const distToMax = Math.abs(value - maxVal);

    if (distToMin < distToMax) {
      const newMin = Math.min(value, maxVal);
      setMinVal(newMin);
    } else {
      const newMax = Math.max(value, minVal);
      setMaxVal(newMax);
    }
  };

  return {
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
  };
}
