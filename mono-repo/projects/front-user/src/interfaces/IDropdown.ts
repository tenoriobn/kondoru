export interface IArrowProps {
  $isOpen: boolean;
}

export interface IDropdownListProps {
  $isOpen: boolean;
}

export interface IDropdownProps {
  id: string;
  label: string;
  options: string[];
  selectedOption: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}