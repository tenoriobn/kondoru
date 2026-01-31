import type { UseFormReturn } from 'react-hook-form';
import type { RegisterData } from '../registerSchema';

export interface FormRegisterProps {
  methods: UseFormReturn<RegisterData>;
  onSubmit: (data: RegisterData) => Promise<void>;
  isSubmitting: boolean;
}
