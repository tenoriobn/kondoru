'use client';
import Form from 'src/components/Form';
import { InputGroup } from 'src/components/Inputs';
import { InputField } from 'src/components/Inputs/InputField';
import UserIcon from 'public/icons/user.svg';
import EmailIcon from 'public/icons/email.svg';
import PhoneIcon from 'public/icons/phone.svg';
import SubjectIcon from 'public/icons/subject.svg';
import MessageIcon from 'public/icons/message.svg';
import LoadingIcon from 'public/icons/loading.svg';
import StatusMessage from 'src/components/StatusMessage';
import CheckIcon from 'public/icons/check.svg';
import { useContactForm } from './useContactForm';

export default function ContactForm() {
  const { methods, onSubmit, showContactForm } = useContactForm();
  const isSubmitting = methods.formState.isSubmitting;
  const formErrorMessage = methods.formState.errors.root?.message;

  return (
    <div
      className="bg-dark-slate-800 rounded-3xl border border-[rgba(189,189,189,0.16)] flex flex-col items-center justify-center gap-12 max-w-175 w-full h-full p-4 xs:p-6 md:p-8"
      aria-labelledby="contact-form-title"
    >
      {showContactForm ? (
        <>
          <h2 id="contact-form-title" className="text-xl font-semibold text-white text-center">
            Fale com a gente
          </h2>

          <Form
            className="w-full grid"
            methods={methods}
            onSubmit={methods.handleSubmit(onSubmit)}
            noValidate
          >
            <InputGroup legend="Dados de acesso" formErrorMessage={formErrorMessage}>
              <InputField id="name" type="text" label="Nome completo" Icon={<UserIcon />} />
              <InputField id="email" type="email" label="E-mail" Icon={<EmailIcon />} />
              <InputField id="phone" type="tel" label="Telefone / Whatsapp" Icon={<PhoneIcon />} />
              <InputField id="subject" type="text" label="Assunto" Icon={<SubjectIcon />} />
              <InputField id="message" type="textarea" label="Mensagem" Icon={<MessageIcon />} />
            </InputGroup>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`
            justify-self-center w-full min-w-41.5 max-w-max py-4 px-8 rounded-full text-base font-semibold text-dark-slate-800 transition-all duration-300 ease-in-out md:text-xl mt-12
            ${isSubmitting ? 'cursor-no-drop bg-white' : 'cursor-pointer bg-gray-400 hover:bg-white-80 active:bg-white active:scale-90'}
          `}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span>Cadastrando</span>
                  <LoadingIcon
                    aria-hidden="true"
                    className="justify-self-center w-6 text-dark-slate-900"
                  />
                </div>
              ) : (
                'Enviar Mensagem'
              )}
            </button>
          </Form>
        </>
      ) : (
        <StatusMessage
          message="Mensagem enviada com sucesso!"
          Icon={CheckIcon}
          className="text-green"
        />
      )}
    </div>
  );
}
