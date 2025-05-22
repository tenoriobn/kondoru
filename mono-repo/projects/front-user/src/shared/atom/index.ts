import { atom } from 'recoil';

export const showRegisterFormState = atom<boolean>({
  key: 'registerForm',
  default: true,
});


export const showForgotPasswordFormState = atom<boolean>({
  key: 'showForgotPasswordForm',
  default: true,
});

export const showPasswordResetFormState = atom<boolean>({
  key: 'showPasswordResetForm',
  default: true,
});