import Image from 'next/image';
import styled from 'styled-components';
import ArrowIcon from 'public/icons/arrow.svg';
import { IDropdownVisibility, IDropdownHandlers } from 'src/interfaces/IDropdown';

const StyledDropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 56px;
  height: 100%;

  @media (min-width: 992px) {
    max-height: 64px;
    height: 100%;
  }
`;

const StyledDropdown = styled.div<{ $isOpen: boolean, $selectedOption: string }>`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  cursor: pointer;
  background-color: ${({ theme, $isOpen }) =>
    $isOpen ? theme.colors['dark-slate-800'] : theme.colors['slate-40']};
  border-right: 0.0625rem solid ${({ theme }) => theme.colors['slate-14']};
  border-radius: 3rem;

  position: relative;

  padding: 0.5rem 1.5rem;
  height: 100%;
  transition: ${({ theme }) => theme.transitions.smoothTransitionBg};

  label {
    color: ${({ theme }) => theme.colors['white-80']};
    font-size: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    cursor: pointer;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['dark-slate-900']};
  }

  @media (min-width: 768px) {
    border-radius: 0;

    ${StyledDropdownContainer}:nth-of-type(odd) & {
      border-radius: 3rem 0 0 3rem;
    }

    ${StyledDropdownContainer}:nth-of-type(even) & {
      border-radius: 0 3rem 3rem 0;
    }
  }

  @media (min-width: 992px) {
    border-radius: 0;

    ${StyledDropdownContainer}:nth-of-type(n+2) & {
      border-radius: 0;
    }

    ${StyledDropdownContainer}:nth-of-type(4) & {
      border: none;
    }
  }
`;

const StyledArrowIcon = styled(Image)<IDropdownVisibility>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: ${({ theme }) => theme.transitions.smoothTransition};
`;

const StyledDropdownList = styled.ul<IDropdownVisibility>`
  display: block;
  background-color: ${({ theme }) => theme.colors['dark-slate-800']};
  border-radius: 0.75rem;
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  right: 0;
  z-index: 10;
  max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  overflow-y: auto;
  transition: ${({ theme }) => theme.transitions.smoothTransition};
`;

const StyledDropdownListItem = styled.li`
  cursor: pointer;
  color: ${({ theme }) => theme.colors['white-80']};
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
  label,
  options,
  selectedOption,
  isOpen,
  onToggle,
  onSelect,
}: IDropdownHandlers) {
  return (
    <StyledDropdownContainer>
      <StyledDropdown 
        onClick={onToggle} 
        $isOpen={isOpen} 
        $selectedOption={selectedOption} 
        title={selectedOption || label}
      >
        <label>
          {selectedOption || label}
        </label>

        <StyledArrowIcon src={ArrowIcon} alt="Icone de expandir/ocultar dropdown" $isOpen={isOpen} />
      </StyledDropdown>

      <StyledDropdownList $isOpen={isOpen}>
        {selectedOption &&
            <StyledDropdownListItem
              onClick={() => onSelect('')}
              title="Limpar Filtro"
            >
              Limpar Filtro
            </StyledDropdownListItem>
        }

        {options.map((option) => (
          <StyledDropdownListItem
            key={option}
            className={selectedOption === option ? 'selected' : ''}
            onClick={() => onSelect(option)}
            title={option}
          >
            {option}
          </StyledDropdownListItem>
        ))}
      </StyledDropdownList>

    </StyledDropdownContainer>
  );
};