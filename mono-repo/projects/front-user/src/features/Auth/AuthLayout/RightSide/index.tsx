import styled from 'styled-components';
import Image from 'next/image';

const Styled = {
  Aside: styled.aside`
    display: none;
    border-radius: ${({ theme }) => theme.borderRadius['rounded-24']};
    overflow: hidden;

    @media (min-width: 992px) {
      display: flex;
    }
  `,

  Image: styled(Image)`
    width: 100%;
    height: 100%;
    max-height: 888px;
    object-fit: cover;
  `,
};

export default function RightSide() {
  return (
    <Styled.Aside>
      <Styled.Image src="/images/auth-img.jpg" alt='' width={0} height={0} sizes="100vw" />
    </Styled.Aside>
  );
}
