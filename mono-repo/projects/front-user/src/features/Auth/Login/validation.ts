import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Digite um E-mail válido').min(1, 'Por favor, digite um email!'),
  password: z.string().min(1, 'Por favor, digite uma senha!'),
});
