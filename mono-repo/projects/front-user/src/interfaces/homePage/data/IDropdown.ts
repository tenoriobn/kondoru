export interface IDropdownVisibility {
  $isOpen: boolean;
}

export interface IDropdownProps {
  id: string;
  label: string;
  options: string[];
}

/* eslint-disable no-unused-vars */
export interface IDropdownHandlers extends IDropdownProps {
  selectedOption: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}