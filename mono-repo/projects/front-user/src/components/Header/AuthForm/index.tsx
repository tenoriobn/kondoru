import React from 'react';
import Modal from 'src/components/Modal';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { useRecoilValue } from 'recoil';
import { stateActiveAuthForm } from 'src/store/atom';
import useBodyOverflow from 'src/hooks/utils/useBodyOverflow';

export default function AuthForm() {
  const activeAuthForm = useRecoilValue(stateActiveAuthForm);
  useBodyOverflow(!!activeAuthForm);

  return (
    <>
      {activeAuthForm &&
        <Modal>
          { activeAuthForm === 'login' && <LoginForm /> }
          { activeAuthForm === 'register' && <RegistrationForm /> }
        </Modal>
      }
    </>
  );
}
