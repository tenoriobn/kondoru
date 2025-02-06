export interface ILoginState {
  email: string;
  password: string;
}

export interface ILoginInputsProps {
  login: ILoginState;
  setLogin: React.Dispatch<React.SetStateAction<ILoginState>>;
  messageError: string;
}