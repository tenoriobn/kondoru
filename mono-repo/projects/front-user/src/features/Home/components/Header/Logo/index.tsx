import Image from 'next/image';
import styled from 'styled-components';

const StyledContainerLogo = styled.div`
  width: 188px;
`;

export default function Logo() {
  return (
    <StyledContainerLogo>
      <Image src="icons/logotipo.webp" width={164} height={40} alt="Logo da KondoRu" />
    </StyledContainerLogo>
  );
}
