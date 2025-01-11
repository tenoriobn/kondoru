import Button from 'src/components/Button';
import Select from 'src/components/Select';
import styled from 'styled-components';

const StyledContainerFilter = styled.form`
  display: flex;
  /* flex-direction: column; */
`;

const options = ['Apartamento', 'Casa', 'Terreno', 'Comercial', 'Teste 1', 'Teste 2', 'Teste 3', 'Teste 4', 'Teste 5'];

export default function Filter() {
  return (
    <StyledContainerFilter>
      <Select 
        options={options}
        $borderRadius="3rem 0 0 3rem"
      />

      <Select 
        options={options}
      />

      <Select 
        options={options}
      />

      <Select 
        options={options}
      />

      <Select 
        $borderRadius="0 3rem 3rem 0"
        $padding=".5rem"
      >
        {/* <StyledButton>Filtrar</StyledButton> */}

        <Button
          $backgroundColor="dark-slate-800"
          $color="white"
          $borderRadius="rounded-48"
          $padding="8px"
          $height="100%"
          $hoverBackgroundColor="white-80"
          $activeBackgroundColor="white"
          $width="100%"
        >
          Filtrar
        </Button>
      </Select>
    </StyledContainerFilter>
  );
}
