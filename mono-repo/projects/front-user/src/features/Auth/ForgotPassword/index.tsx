import { useRecoilValue } from 'recoil';
import AuthLayout from '../AuthLayout';
import AuthDivider from '../AuthLayout/AuthDivider';
import ForgotPasswordForm from './ForgotPasswordForm';
import { showForgotPasswordFormState } from 'src/shared/atom';
import CheckIcon from 'public/icons/check.svg';
import styled from 'styled-components';
import CheckedMessage from 'src/components/CheckedMessage';

const Styled = {
  CheckIcon: styled(CheckIcon)`
    justify-self: center;
  `,
};

export default function ForgotPasswordScreen() {
  const showForgotPasswordForm = useRecoilValue(showForgotPasswordFormState);

  return (
    <AuthLayout>
      {showForgotPasswordForm ? (
        <>        
          <AuthDivider 
            label='Digite o e-mail cadastrado para redefinir sua senha'
          />

          <ForgotPasswordForm />
        </>
      ) : (
        <CheckedMessage
          message='Um link de redefinição foi enviado para o seu e-mail.'
        />
      )}      
    </AuthLayout>
  );
}
