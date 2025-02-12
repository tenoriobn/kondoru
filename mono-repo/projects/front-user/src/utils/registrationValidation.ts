import { z } from 'zod';

export const registrationSchema = z.object({
  name: z.string()
    .min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string()
    .email('Digite um E-mail válido'),
  password: z.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')  
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número'),
  passwordConfirmation: z.string(),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: 'As senhas não coincidem',
  path: ['passwordConfirmation'],
});
