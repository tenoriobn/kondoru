import Button from 'src/components/Button';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import useDropdowns from 'src/hooks/Header/useDropDowns';

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  
  @media (min-width: 768px) {
    max-height: 56px;
    height: 100%;
    grid-column: span 2;
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

const dropdowns = [
  {
    id: 'contrato',
    label: 'Contrato',
    options: ['Venda', 'Aluguel', 'Temporada', 'Permuta'],
  },
  {
    id: 'imovel',
    label: 'Imóvel',
    options: ['Apartamento', 'Casa', 'Terreno', 'Comercial', 'Galpão', 'Sítio', 'Chácara'],
  },
  {
    id: 'preco',
    label: 'Preço',
    options: ['Até R$ 100.000', 'R$ 100.000 - R$ 300.000', 'R$ 300.000 - R$ 500.000', 'Acima de R$ 500.000'],
  },
  {
    id: 'localidade',
    label: 'Localidade',
    options: ['Centro', 'Zona Sul', 'Zona Norte', 'Zona Leste', 'Zona Oeste', 'Região Metropolitana'],
  },
];

export default function Filter() {
  const { openDropdown, selectedOptions, handleToggleDropdown, handleSelectOption, dropdownRef } = useDropdowns({
    contrato: '',
    imovel: '',
    preco: '',
    localidade: '',
  });

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

      <ButtonContainer>
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
      </ButtonContainer>
    </StyledContainerFilter>
  );
}