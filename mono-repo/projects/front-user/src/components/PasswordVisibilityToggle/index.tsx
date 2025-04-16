import ViewIcon from 'public/icons/view.svg';
import NoViewIcon from 'public/icons/NoView.svg';
import { PasswordVisibilityProps } from './passwordVisibilityToggle.types';

export default function PasswordVisibilityToggle({ passwordView, setPasswordView }: PasswordVisibilityProps) {
  const Icon = passwordView ? ViewIcon : NoViewIcon;

  return (
    <Icon
      style={{
        cursor: 'pointer',
        zIndex: 10,
        userSelect: 'none',
      }}
      onClick={() => setPasswordView(!passwordView)}
    />
  );
}