import Button from 'src/components/Button';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import useDropdowns from 'src/hooks/Header/useDropDowns';
import { useHomePageData } from 'src/contexts/HomePageContext';

const StyledContainerFilter = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  max-height: 48px;
  height: 100%;
  
  @media (min-width: 768px) {
    grid-column: span 2;
    
    button {
      max-width: 250px;
    }
  }

  @media (min-width: 992px) {
    grid-column: auto;
    background-color: ${({ theme }) => theme.colors['slate-40']};
    border-right: 0.0625rem solid ${({ theme }) => theme.colors['slate-14']};
    max-height: 64px;
    height: 100%;
    border-radius: 0 3rem 3rem 0;
    padding: .5rem;
  }
`;

export default function Filter() {
  const { dropdowns } = useHomePageData();
  const { 
    openDropdown, selectedOptions, handleToggleDropdown, handleSelectOption, dropdownRef, 
  } = useDropdowns();

  return (
    <StyledContainerFilter ref={dropdownRef}>
      {dropdowns.map((dropdown) => (
        <Dropdown
          key={dropdown.id}
          id={dropdown.id}
          label={dropdown.label}
          options={dropdown.options}
          selectedOption={selectedOptions[dropdown.id]}
          isOpen={openDropdown === dropdown.id}
          onToggle={() => handleToggleDropdown(dropdown.id)}
          onSelect={(value) => handleSelectOption(dropdown.id, value)}
        />
      ))}

      <StyledButtonContainer>
        <Button
          $backgroundColor="dark-slate-800"
          $color="white"
          $borderRadius="rounded-48"
          $padding="8px"
          $height="100%"
          $hoverBackgroundColor="dark-slate-58"
          $activeBackgroundColor="dark-slate-700"
          $width="100%"
        >
          Filtrar
        </Button>
      </StyledButtonContainer>
    </StyledContainerFilter>
  );
}
