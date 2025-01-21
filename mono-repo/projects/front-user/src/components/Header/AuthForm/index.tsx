import React from 'react';
import Modal from 'src/components/Modal';
import RegistrationForm from './RegistrationForm';

export default function AuthForm() {
  return (
    <Modal>
      {/* <LoginForm /> */}
      <RegistrationForm />
    </Modal>
  );
}
