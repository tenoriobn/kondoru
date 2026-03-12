export interface RangeInputProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}
