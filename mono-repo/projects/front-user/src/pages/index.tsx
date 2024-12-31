import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { stateUser } from '../store/atom';
import { jwtDecode } from 'jwt-decode';
import styled from 'styled-components';
import Theme from '../styles/theme/Theme';

const StyledButton = styled.button`
  background-color: ${Theme.colors.black};
  color: blue;
  border: none;
  z-index: 3;
`;

export default function HomePage() {
  const [user, setUser] = useRecoilState(stateUser);

  useEffect(() => {
    console.log('user: ', user);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const decoded = jwtDecode(token);
    console.log('decoded: ', decoded);
    
  }, [user]);

  return (
    <div>
      <h2>Alura Cases - Home</h2>
      <a href="/faq">
        Ir para a página do FAQ
        Aqui:
      </a>
      <StyledButton onClick={() => setUser(user + 1)}>Acréscimo</StyledButton>
    </div>
  );
}