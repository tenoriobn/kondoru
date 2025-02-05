import React, { useState } from 'react';
import InputBox from 'src/components/InputBox';
import { StyledInput } from 'src/styles/components/StyledForm';
import EmailIcon from 'public/icons/email.svg';
import SecurityIcon from 'public/icons/security.svg';
import ViewIcon from 'public/icons/view.svg';
import styled from 'styled-components';
import ErrorMessage from 'src/components/Message';

const StyledContainerInput = styled.div`
  display: grid;
  gap: .25rem;
`;

export default function LoginInputs() {
  const [auth, setAuth] = useState({ email: '', password: ''});

  return (
    <>
      <StyledContainerInput>
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

        <ErrorMessage>
          Mensagem de Erro
        </ErrorMessage>
      </StyledContainerInput>

      <StyledContainerInput>
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

        <ErrorMessage>
          Mensagem de Erro
        </ErrorMessage>
      </StyledContainerInput>
    </>
  );
}
