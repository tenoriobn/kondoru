import React, { useState } from 'react';
import InputBox from 'src/components/InputBox';
import { StyledInput } from 'src/styles/styledComponents/StyledForm';
import UserIcon from 'public/icons/user.svg';
import EmailIcon from 'public/icons/email.svg';
import SecurityIcon from 'public/icons/security.svg';
import ViewIcon from 'public/icons/view.svg';

export default function RegistrationInputs() {
  const [auth, setAuth] = useState({ name: '', email: '', password: '', confirmPassword: ''});

  return (
    <>
      <InputBox icon={<UserIcon />}>
        <StyledInput
          type="text"
          name="name"
          id="name"
          placeholder="Nome completo"
          minLength={6}
          maxLength={260}
          value={auth.name}
          onChange={(e) => setAuth({...auth, name: e.target.value})}
          required
        />
      </InputBox>

      <InputBox icon={<EmailIcon />}>
        <StyledInput
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          minLength={6}
          maxLength={260}
          value={auth.email}
          onChange={(e) => setAuth({...auth, email: e.target.value})}
          required
        />
      </InputBox>

      <InputBox icon={<SecurityIcon />}>
        <StyledInput
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          minLength={8}
          maxLength={260}
          value={auth.password}
          onChange={(e) => setAuth({...auth, password: e.target.value})}
          required
        />

        <ViewIcon style={{ cursor: 'pointer', zIndex: 10}} />
      </InputBox>

      <InputBox icon={<SecurityIcon />}>
        <StyledInput
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirmar senha"
          minLength={8}
          maxLength={260}
          value={auth.confirmPassword}
          onChange={(e) => setAuth({...auth, confirmPassword: e.target.value})}
          required
        />
        <ViewIcon style={{ cursor: 'pointer', zIndex: 10}} />
      </InputBox>
    </>
  );
}
