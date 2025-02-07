export interface IRegisterState {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IRegisterInputsProps {
  register: IRegisterState;
  setRegister: React.Dispatch<React.SetStateAction<IRegisterState>>;
}