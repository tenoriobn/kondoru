import styled from 'styled-components';
import ArrowDownIcon from 'public/icons/arrow-down.svg';
import { DropdownVisibility, DropdownHandlers } from 'src/features/Home/types/dropdown.types';

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

const Styled = {
  Dropdown: styled.div<{ $isOpen: boolean, $selectedOption: string }>`
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    cursor: pointer;
    background-color: ${({ theme, $isOpen }) => theme.colors[$isOpen ? 'dark-slate-800' : 'slate-40']};
    border-right: 0.0625rem solid ${({ theme }) => theme.colors['slate-14']};
    border-radius: 3rem;

    position: relative;

    padding: 0.5rem 1.5rem;
    height: 100%;
    transition: ${({ theme }) => theme.transitions.smoothTransitionBg};

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
      box-shadow: none;

      ${StyledDropdownContainer}:nth-of-type(n+2) & {
        border-radius: 0;
      }

      ${StyledDropdownContainer}:nth-of-type(4) & {
        border: none;
      }
    }
  `,

  Label: styled.label`
    color: ${({ theme }) => theme.colors['white-80']};
    font-size: 1.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    cursor: pointer;
  `,

  ArrowIcon: styled(ArrowDownIcon)<DropdownVisibility>`
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: ${({ theme }) => theme.transitions.smoothTransition};

    path {
      stroke: ${({ theme }) => theme.colors['white-80']};
    }
  `,

  DropdownList: styled.ul<DropdownVisibility>`
    display: block;
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    border-radius: 0.75rem;
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.40);
    
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
    right: 0;
    z-index: 10;
    max-height: ${({ $isOpen }) => ($isOpen ? '176.48px' : '0')};
    overflow-y: hidden;
    transition: max-height 0.2s ease-in-out;

    ${({ $isOpen }) => $isOpen && 'animation: enable-scroll 0.2s forwards 0.2s;'};

    @keyframes enable-scroll {
      to { overflow-y: auto; }
    }

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['dark-slate-800']};
      border-radius: 0 0.25rem 0.25rem 0;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors['slate-14']};
      border-radius: 0.25rem;
    }
  `,

  DropdownListItem: styled.li`
    cursor: pointer;
    color: ${({ theme }) => theme.colors['white-80']};
    padding: 0.75rem 1.5rem;
    transition: ${({ theme }) => theme.transitions.smoothTransition};

    &.selected {
      background-color: ${({ theme }) => theme.colors['slate-14']}!important;
      color: ${({ theme }) => theme.colors['white']}!important;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors['slate-40']};
      color: ${({ theme }) => theme.colors['white']};
    }
  `,
};

export default function Dropdown({
  label,
  options,
  selectedOption,
  isOpen,
  onToggle,
  onSelect,
}: DropdownHandlers) {

  return (
    <StyledDropdownContainer>
      <Styled.Dropdown
        onClick={onToggle}
        $isOpen={isOpen}
        $selectedOption={selectedOption}
        title={selectedOption || label}
      >
        <Styled.Label>
          {selectedOption || label}
        </Styled.Label>

        <Styled.ArrowIcon $isOpen={isOpen} />
      </Styled.Dropdown>

      <Styled.DropdownList $isOpen={isOpen}>
        {selectedOption &&
            <Styled.DropdownListItem
              onClick={() => onSelect('')}
              title="Limpar Filtro"
            >
              Limpar Filtro
            </Styled.DropdownListItem>
        }

        {options.map((option) => (
          <Styled.DropdownListItem
            key={option}
            className={selectedOption === option ? 'selected' : ''}
            onClick={() => onSelect(option)}
            title={option}
          >
            {option}
          </Styled.DropdownListItem>
        ))}
      </Styled.DropdownList>

    </StyledDropdownContainer>
  );

};
