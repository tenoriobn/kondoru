import styled from 'styled-components';

const StyledImage = styled.img`
  border-radius: 1.5rem;
  max-width: 580px;
  width: 100%;
`;

export default function ElegantShowCasePlayer() {
  return (
    <>
      <StyledImage src="/images/video-player.png" alt="Imagem temporária ilustrando player" />
    </>
  );
}
