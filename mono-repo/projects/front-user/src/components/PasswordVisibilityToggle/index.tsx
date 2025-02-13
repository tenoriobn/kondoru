import ViewIcon from 'public/icons/view.svg';
import NoViewIcon from 'public/icons/NoView.svg';
import { IPasswordVisibilityProps } from 'src/interfaces/common/IPasswordVisibilityToggle';

export default function PasswordVisibilityToggle({ passwordView, setPasswordView }: IPasswordVisibilityProps) {
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