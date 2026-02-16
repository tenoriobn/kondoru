import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres').max(150, 'Nome muito longo!'),
  email: z
    .string()
    .min(1, 'Por favor, digite um e-mail!')
    .max(254, 'E-mail muito longo!')
    .pipe(z.email({ message: 'Digite um e-mail válido' })),
  phone: z
    .string()
    .regex(
      /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
      'Digite um número de telefone ou celular válido com DDD'
    ),

  subject: z.string().min(1, 'Selecione um assunto'),

  message: z
    .string()
    .min(10, 'A mensagem deve ter pelo menos 10 caracteres')
    .max(1500, 'Mensagem muito longa!'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
