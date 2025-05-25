import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'Por favor, digite um e-mail!')
    .max(254, 'E-mail muito longo!')
    .email('Digite um e-mail válido!'),
});

export type NewsletterSchema = z.infer<typeof newsletterSchema>;
