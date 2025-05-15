import AuthLayout from '../AuthLayout';
import LeftSide from '../AuthLayout/LeftSide';
import AuthDivider from '../AuthLayout/LeftSide/AuthDivider';
import RightSide from '../AuthLayout/RightSide';
import ResetPasswordForm from './ResetPasswordForm';

export default function ResetPasswordScreen() {
  return (
    <AuthLayout>
      <LeftSide>
        <AuthDivider 
          label='Digite a nova senha que deseja utilizar'
        />
        <ResetPasswordForm />
      </LeftSide>

      <RightSide />
    </AuthLayout>
  );
}
