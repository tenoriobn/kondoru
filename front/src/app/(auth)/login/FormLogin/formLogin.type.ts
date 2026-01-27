import type { UseFormReturn } from 'react-hook-form';
import type { LoginData } from '../loginSchema';

export interface FormLoginProps {
  methods: UseFormReturn<LoginData>;
  onSubmit: (data: LoginData) => Promise<void>;
  isSubmitting: boolean;
}
