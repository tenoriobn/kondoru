import { differenceInYears, isValid, parseISO } from 'date-fns';
import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, 'O nome deve ter pelo menos 3 caracteres')
      .max(150, 'Nome muito longo!'),

    email: z
      .string()
      .min(1, 'Por favor, digite um e-mail!')
      .max(254, 'E-mail muito longo!')
      .email('Digite um e-mail válido!'),

    dateOfBirth: z
      .string()
      .refine((value) => {
        const parsedDate = parseISO(value);
        return isValid(parsedDate);
      }, {
        message: 'Data de nascimento inválida',
      })
      .refine((value) => {
        const age = differenceInYears(new Date(), parseISO(value));
        return age >= 18;
      }, {
        message: 'Você deve ter pelo menos 18 anos',
      })
    ,

    phone: z
      .string()
      .regex(
        /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
        'Digite um número de telefone ou celular válido com DDD'
      ),

    password: z
      .string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
      .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
      .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
      .regex(/[^a-zA-Z0-9]/, 'A senha deve conter pelo menos um caractere especial'),

    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'As senhas não coincidem',
    path: ['passwordConfirmation'],
  });

export type registerFormValues = z.infer<typeof registerSchema>;
