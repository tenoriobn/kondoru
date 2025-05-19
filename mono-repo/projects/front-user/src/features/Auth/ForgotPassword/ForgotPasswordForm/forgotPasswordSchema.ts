import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'Por favor, digite um e-mail!')
    .max(254, 'E-mail muito longo!')
    .email('Digite um E-mail válido'),
});

export type forgotPasswordValues = z.infer<typeof forgotPasswordSchema>;
