export interface ResetPasswordFormProps {
  passwordResetToken: string;
  setShowPasswordResetForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UseResetPasswordFormData {
  password: string;
  passwordConfirmation: string;
}

