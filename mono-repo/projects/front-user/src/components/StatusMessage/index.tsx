import styled from 'styled-components';
import { StatusMessageProps } from './statusMessage.type';

const Styled = {
  StatusMessage: styled.div`
    display: grid;
    place-items: center;
    gap: 1.5rem;
    width: 100%;
  `,

  Message: styled.p<{ $color: string }>`
    color: ${({ theme, $color }) => theme.colors[$color]};
    font-size: 1rem;
    font-weight: 500;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  `,

  IconWrapper: styled.div`
    justify-self: center;
  `
};

export default function StatusMessage({ message, icon: Icon, color }: StatusMessageProps) {
  return (
    <Styled.StatusMessage>
      <Styled.Message $color={color}>{message}</Styled.Message>
      <Styled.IconWrapper>
        <Icon />
      </Styled.IconWrapper>
    </Styled.StatusMessage>
  );
}
