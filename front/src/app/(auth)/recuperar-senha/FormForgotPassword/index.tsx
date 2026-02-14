import Form from 'src/components/Form';
import { InputGroup } from 'src/components/Inputs';
import { InputField } from 'src/components/Inputs/InputField';
import EmailIcon from 'public/icons/email.svg';
import LoadingIcon from 'public/icons/loading.svg';
import type { FormForgotPasswordProps } from './formForgotPassword.type';

export default function FormForgotPassword({
  methods,
  onSubmit,
  isSubmitting,
}: FormForgotPasswordProps) {
  const formErrorMessage = methods.formState.errors.root?.message;

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)} noValidate>
      <InputGroup legend="Dados de acesso" formErrorMessage={formErrorMessage}>
        <InputField id="email" type="email" label="E-mail" Icon={<EmailIcon />} />
      </InputGroup>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`
          w-full min-w-41.5 max-w-max py-4 px-8 rounded-full text-base font-semibold text-dark-slate-800 transition-all duration-300 ease-in-out md:text-xl
          ${isSubmitting ? 'cursor-no-drop bg-white' : 'cursor-pointer bg-gray-400 hover:bg-white-80 active:bg-white active:scale-90'}
        `}
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <span>Redefinindo</span>
            <LoadingIcon
              aria-hidden="true"
              className="justify-self-center w-6 text-dark-slate-900"
            />
          </div>
        ) : (
          'Redefinir senha'
        )}
      </button>
    </Form>
  );
}
