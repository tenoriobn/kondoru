export interface DropdownProps {
  id: string;
  label: string;
  options: string[];
  selectedOption: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}
