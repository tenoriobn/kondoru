import type { UseFormReturn } from 'react-hook-form';
import type { ForgotPasswordData } from '../forgotPasswordSchema';

export interface FormForgotPasswordProps {
  methods: UseFormReturn<ForgotPasswordData>;
  onSubmit: (data: ForgotPasswordData) => Promise<void>;
  isSubmitting: boolean;
}
