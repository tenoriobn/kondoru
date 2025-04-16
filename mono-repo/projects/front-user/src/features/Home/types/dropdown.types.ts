export interface DropdownVisibility {
  $isOpen: boolean;
}

export interface DropdownProps {
  id: string;
  label: string;
  options: string[];
}

export interface DropdownHandlers extends DropdownProps {
  selectedOption: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}