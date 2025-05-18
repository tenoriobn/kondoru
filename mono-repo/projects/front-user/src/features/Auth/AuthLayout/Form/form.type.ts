import { FormEventHandler } from 'react';
export interface FormProps {
  methods: any; 
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}