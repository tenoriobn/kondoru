import Form from 'src/components/Form';
import { InputGroup, InputPassword } from 'src/components/Inputs';
import { InputField } from 'src/components/Inputs/InputField';
import ForgotPasswordLink from './ForgotPasswordLink';
import EmailIcon from 'public/icons/email.svg';
import LockIcon from 'public/icons/lock.svg';
import LoadingIcon from 'public/icons/loading.svg';
import type { FormLoginProps } from './formLogin.type';

export default function FormLogin({ methods, onSubmit, isSubmitting }: FormLoginProps) {
  const formErrorMessage = methods.formState.errors.root?.message;

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)} noValidate>
      <InputGroup formErrorMessage={formErrorMessage}>
        <InputField id="email" type="email" label="E-mail" Icon={<EmailIcon />} />
        <InputPassword id="password" label="Senha" Icon={<LockIcon />} />
      </InputGroup>

      <ForgotPasswordLink isSubmitting={isSubmitting} />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`
          w-full min-w-41.5 max-w-max py-4 px-8 rounded-full text-base font-semibold text-dark-slate-800 transition-all duration-300 ease-in-out md:text-xl
          ${isSubmitting ? 'cursor-no-drop bg-white' : 'cursor-pointer bg-gray-400 hover:bg-white-80 active:bg-white'}
        `}
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            Entrando
            <LoadingIcon
              aria-hidden="true"
              className="justify-self-center w-6 text-dark-slate-900"
            />
          </div>
        ) : (
          'Entrar'
        )}
      </button>
    </Form>
  );
}
