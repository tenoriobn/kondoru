// validations/loginSchema.ts
import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Por favor, digite um e-mail!')
    .max(254, 'E-mail muito longo!')
    .email('Digite um E-mail válido'),

  password: z
    .string()
    .min(1, 'Por favor, digite uma senha!')
});

export type LoginFormValues = z.infer<typeof loginSchema>;
