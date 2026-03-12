export interface RangeControlProps {
  id: string;
  minLabel: string;
  maxLabel: string;
  minLimit: number;
  maxLimit: number;
  initialMin?: number;
  initialMax?: number;
  prefix?: string;
  suffix?: string;
}

export interface UseRangeControlParams {
  minLimit: number;
  maxLimit: number;
  initialMin: number;
  initialMax: number;
  prefix?: string;
  suffix?: string;
}
