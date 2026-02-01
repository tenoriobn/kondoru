import type { UseFormReturn } from 'react-hook-form';
import type { ResetPasswordData } from '../resetPasswordSchema';

export interface FormResetPasswordProps {
  methods: UseFormReturn<ResetPasswordData>;
  onSubmit: (data: ResetPasswordData) => Promise<void>;
  isSubmitting: boolean;
}
