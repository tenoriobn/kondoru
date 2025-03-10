import { IRegistrationTermProps } from 'src/interfaces/api/auth/IRegister';
import { StyledCheckbox } from 'src/styles/components/StyledForm';
import { StyledParagraph } from 'src/styles/components/StyledText';
import styled from 'styled-components';

const StyledTermContainer = styled.div`
  display: grid;
  gap: 2rem;
`;

const StyledLabel = styled.label`
  user-select: none;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors['gray-400']};
`;

export default function RegistrationTerm({ setAuthorization }: IRegistrationTermProps) {
  return (
    <StyledTermContainer>
      <StyledParagraph>
        Estes dados serão utilizados apenas para facilitar os seus 
        agendamentos de visitas, suas reservas em um imóvel e para 
        entrarmos em contato com você. Rápido e fácil. Do seu jeito!
      </StyledParagraph>

      <StyledLabel htmlFor="confirm-term">
        <StyledCheckbox 
          type="checkbox" 
          name="confirm-term" 
          id="confirm-term" 
          onClick={(e) => setAuthorization((e.target as HTMLInputElement).checked)}
        />

        Li e aceito os Termos de Uso e Políticas de Privacidade
      </StyledLabel>
    </StyledTermContainer>
  );
}
