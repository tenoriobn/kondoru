import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'Por favor, digite um e-mail!')
    .pipe(z.email({ message: 'Digite um e-mail válido' })),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
