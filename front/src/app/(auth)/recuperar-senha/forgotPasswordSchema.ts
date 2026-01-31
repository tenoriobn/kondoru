import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'Por favor, digite um e-mail!')
    .max(254, 'E-mail muito longo!')
    .pipe(z.email({ message: 'Digite um e-mail válido' })),
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;
