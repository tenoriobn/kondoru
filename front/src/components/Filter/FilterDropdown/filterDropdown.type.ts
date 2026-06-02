export interface FilterDropdownProps {
  id: string;
  label: string;
  options: string[];
  selectedOption: string;
  isOpen: boolean;
  canClear?: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}
