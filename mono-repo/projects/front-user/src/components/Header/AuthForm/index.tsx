import React from 'react';
import Modal from 'src/components/Modal';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { useRecoilValue } from 'recoil';
import { stateActiveAuthForm } from 'src/store/atom';

export default function AuthForm() {
  const activeAuthForm = useRecoilValue(stateActiveAuthForm);

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
