import Image from 'next/image';
import ArrowIcon from 'public/icons/arrow.svg';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  $borderRadius?: string;
  $padding?: string;
}

interface DropdownListProps {
  $isOpen: boolean;
}

interface ArrowProps {
  $isOpen: boolean;
}

interface SelectProps {
  options?: string[];
  $borderRadius?: string;
  $padding?: string;
  children?: ReactNode;
}

const DropdownContainer = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  height: 100%;
`;

const StyledDropdown = styled.div<DropdownProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors['slate-40']};
  border-right: 0.0625rem solid ${({ theme }) => theme.colors['slate-14']};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
  color: ${({ theme }) => theme.colors['white-80']};
  font-size: 1.5rem;

  position: relative;
  transition: ${({ theme }) => theme.transitions.smoothTransition};
  height: 100%;
  padding: ${({ $padding }) => $padding ? $padding : '0.5rem 1.5rem'};

  &:hover {
    background-color: #0070f3;
    border-color: #0070f3;
  }
`;

const DropdownList = styled.ul<DropdownListProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  background: #fff;
  border: 0.0625rem solid #ccc;
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
  padding: 0.75rem 1.5rem;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const Arrow = styled(Image)<ArrowProps>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`;

export default function Select({ options, $borderRadius, $padding, children }: SelectProps) {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <StyledDropdown onClick={() => setIsOpen(!isOpen)} $borderRadius={$borderRadius} $padding={$padding}>
        {selectedOption || children || 'Contrato'}
        
        {!children && 
          <Arrow src={ArrowIcon} alt="Icone de expandir/ocultar dropdown" $isOpen={isOpen} />
        }
      </StyledDropdown>
      <DropdownList $isOpen={isOpen}>
        {!children && options && options.map((option) => (
          <DropdownListItem key={option} onClick={() => handleSelect(option)}>
            {option}
          </DropdownListItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
}
