import { atom } from 'recoil';

export const showForgotPasswordFormState = atom<boolean>({
  key: 'showForgotPasswordForm',
  default: true,
});

export const showPasswordResetFormState = atom<boolean>({
  key: 'showPasswordResetForm',
  default: true,
});