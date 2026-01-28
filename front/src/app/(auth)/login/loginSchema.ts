import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Por favor, digite um e-mail!')
    .pipe(z.email({ message: 'Digite um e-mail válido' })),
  password: z.string().min(1, 'Por favor, digite uma senha!'),
});

export type LoginData = z.infer<typeof loginSchema>;
