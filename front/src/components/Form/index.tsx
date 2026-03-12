import type { FormProps } from './form.type';
import { FormProvider } from 'react-hook-form';

export default function Form({ children, methods, ...props }: FormProps) {
  return (
    <FormProvider {...methods}>
      <form className="flex flex-col items-center gap-8" {...props}>
        {children}
      </form>
    </FormProvider>
  );
}
