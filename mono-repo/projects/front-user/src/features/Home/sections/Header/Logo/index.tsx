import Image from 'next/image';
import styled from 'styled-components';

const StyledContainerLogo = styled.div`
  max-width: 120px;
  width: 100%;

  @media (min-width: 768px) {
      max-width: 168px;
  }
`;

export default function Logo() {
  return (
    <StyledContainerLogo>
      <Image src="/icons/logotipo.svg" width={168} height={40} alt="Logo da KondoRu" />
    </StyledContainerLogo>
  );
}
