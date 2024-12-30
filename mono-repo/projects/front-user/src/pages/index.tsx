import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { stateUser } from "../store/atom";

export default function HomePage() {
  const [user, setUser] = useRecoilState(stateUser);

  useEffect(() => {
    console.log('user: ', user)
  }, [user]);

  return (
    <div>
      <h2>Alura Cases - Home</h2>
      <a href="/faq">
        Ir para a página do FAQ
        Aqui:
      </a>
      <button onClick={() => setUser(user + 1)}>Acréscimo</button>
    </div>
  );
}