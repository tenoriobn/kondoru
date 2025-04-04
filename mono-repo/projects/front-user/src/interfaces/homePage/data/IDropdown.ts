export interface IDropdownVisibility {
  $isOpen: boolean;
}

export interface IDropdownProps {
  id: string;
  label: string;
  options: string[];
}

export interface IDropdownHandlers extends IDropdownProps {
  selectedOption: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}