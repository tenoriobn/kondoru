import Image from 'next/image';
import styled from 'styled-components';
import ArrowIcon from 'public/icons/arrow.svg';
import { IArrowProps, IDropdownListProps, IDropdownProps } from 'src/interfaces/IDropdown';

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 56px;
  height: 100%;

  @media (min-width: 992px) {
    max-height: 64px;
    height: 100%;
  }
`;

const StyledDropdown = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  background-color: ${({ theme, $isOpen }) =>
    $isOpen ? theme.colors['dark-slate-800'] : theme.colors['slate-40']};
  border-right: 0.0625rem solid ${({ theme }) => theme.colors['slate-14']};
  border-radius: 3rem;
  color: ${({ theme }) => theme.colors['white-80']};
  font-size: 1.5rem;

  position: relative;
  transition: ${({ theme }) => theme.transitions.smoothTransition};
  padding: 0.5rem 1.5rem;
  height: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors['dark-slate-900']};
  }

  @media (min-width: 768px) {
    border-radius: 0;

    ${DropdownContainer}:nth-of-type(odd) & {
      border-radius: 3rem 0 0 3rem;
    }

    ${DropdownContainer}:nth-of-type(even) & {
      border-radius: 0 3rem 3rem 0;
    }
  }

  @media (min-width: 992px) {
    border-radius: 0;

    ${DropdownContainer}:nth-of-type(n+2) & {
      border-radius: 0;
    }

    ${DropdownContainer}:nth-of-type(4) & {
      border: none;
    }
  }
`;

const Arrow = styled(Image)<IArrowProps>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`;

const DropdownList = styled.ul<IDropdownListProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  background: ${({ theme }) => theme.colors['slate-40']};
  border-radius: 0.25rem;
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  right: 0;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;

const DropdownListItem = styled.li`
  cursor: pointer;
  color: ${({ theme }) => theme.colors['white-80']};
  background-color: ${({ theme }) => theme.colors['dark-slate-800']};
  padding: 0.75rem 1.5rem;
  transition: ${({ theme }) => theme.transitions.smoothTransition};

  &.selected {
    background-color: ${({ theme }) => theme.colors['zinc-400']}!important;
    color: ${({ theme }) => theme.colors['dark-slate-800']}!important;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['zinc-400']};
    color: ${({ theme }) => theme.colors['dark-slate-800']};
  }
`;

export default function Dropdown({
  id,
  label,
  options,
  selectedOption,
  isOpen,
  onToggle,
  onSelect
}: IDropdownProps) {
  return (
    <DropdownContainer>
      <StyledDropdown onClick={onToggle} $isOpen={isOpen}>
        {selectedOption || label}
        <Arrow src={ArrowIcon} alt="Icone de expandir/ocultar dropdown" $isOpen={isOpen} />
      </StyledDropdown>

      {isOpen && (
        <DropdownList $isOpen={isOpen}>
          {options.map((option) => (
            <DropdownListItem
              key={option}
              className={selectedOption === option ? 'selected' : ''}
              onClick={() => onSelect(option)}
            >
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};