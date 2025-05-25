export interface UseRegisterFormData {
  name: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
}

export interface RegisterFormStateProps {
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
}