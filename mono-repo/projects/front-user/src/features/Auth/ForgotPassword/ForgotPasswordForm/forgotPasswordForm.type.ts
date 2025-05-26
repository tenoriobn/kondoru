export interface UseForgotPasswordFormData {
  email: string;
}

export interface ShowForgotPasswordFormState {
  setShowForgotPasswordForm: React.Dispatch<React.SetStateAction<boolean>>;
}