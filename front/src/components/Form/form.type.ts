import type { ReactNode, FormHTMLAttributes } from 'react';
import type { UseFormReturn } from 'react-hook-form';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  methods: UseFormReturn<any>; // ou substitua `any` pelo tipo do seu form
  children: ReactNode;
}
