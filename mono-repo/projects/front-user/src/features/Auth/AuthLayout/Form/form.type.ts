import { FormEventHandler } from 'react';

export interface FormProps {
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}