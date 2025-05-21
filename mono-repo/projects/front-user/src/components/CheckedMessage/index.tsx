import styled from 'styled-components';
import CheckIcon from 'public/icons/check.svg';

const Styled = {
  CheckedMessage: styled.div`
    display: grid;
    place-items: center;
    gap: 1.5rem;
    width: 100%;
  `,

  Message: styled.p`
    color: ${({ theme }) => theme.colors['green']};
    font-size: 1rem;
    font-weight: 500;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  `,

  CheckIcon: styled(CheckIcon)`
    justify-self: center;
  `,
};

export default function CheckedMessage({ message }: {message: string}) {
  return (
    <Styled.CheckedMessage>
      <Styled.Message>{message}</Styled.Message>
      <Styled.CheckIcon />
    </Styled.CheckedMessage>
  );
}
