import styled from 'styled-components';
import { PasswordVisibilityProps } from './passwordVisibility.type';
import ViewIcon from 'public/icons/view.svg';
import NoViewIcon from 'public/icons/no-view.svg';

const Icon = styled.div`
  cursor: pointer;
  user-select: none;
  z-index: 10;
`;

export default function PasswordVisibility({ passwordView, setPasswordView }: PasswordVisibilityProps) {
  const IconComponent = passwordView ? ViewIcon : NoViewIcon;

  return (
    <Icon
      as={IconComponent}
      onClick={() => setPasswordView(!passwordView)}
    />
  );
}