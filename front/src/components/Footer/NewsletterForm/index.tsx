import type { NewsletterFormProps } from './newsletterForm.type';
import { useNewsletterForm } from './useNewsletterForm';
import InputErrorMessage from 'src/components/InputErrorMessage';
import EmailIcon from 'public/icons/email.svg';
import LoadingIcon from 'public/icons/loading.svg';

export default function NewsletterForm({ setShowNewsletterForm }: NewsletterFormProps) {
  const { onSubmit, register, handleSubmit, errors, isSubmitting } = useNewsletterForm({
    setShowNewsletterForm,
  });

  return (
    <form
      className="grid gap-2 w-full"
      onSubmit={handleSubmit(onSubmit)}
      aria-labelledby="footer-newsletter-title"
      noValidate
    >
      <label
        htmlFor="email"
        className={`
          relative flex items-center gap-2 cursor-text h-16 w-full p-2 pl-8 bg-dark-slate-800 border-2 rounded-full transition-all duration-300 ease-in-out has-[input:disabled]:cursor-not-allowed
          ${!!errors.email ? 'border-red has-[input:focus]:border-red has-[input:not(:placeholder-shown)]:border-red' : 'border-gray-400 has-[input:focus]:border-white has-[input:not(:placeholder-shown)]:border-white'}
        `}
      >
        <input
          id="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          placeholder=""
          {...register('email')}
          disabled={isSubmitting}
          className={`
            peer flex-1 w-full h-16 bg-transparent text-base font-normal text-white outline-none box-border md:text-xl  
            ${isSubmitting && 'cursor-no-drop'}
          `}
        />

        <div
          aria-hidden="true"
          className={`
            absolute left-4 z-9 grid grid-cols-[24px_1fr] items-center gap-2 px-2 py-1.5 text-base font-normal text-gray-400 bg-dark-slate-800 transition-all duration-300 ease-in-out pointer-events-none md:text-xl peer-focus:-translate-y-9 peer-not-placeholder-shown:-translate-y-9 peer-autofill:-translate-y-9 
            ${!!errors.email ? ` peer-focus:text-red peer-not-placeholder-shown:text-red peer-autofill:text-red` : 'peer-focus:text-white peer-not-placeholder-shown:text-white peer-autofill:text-white'}
          `}
        >
          <EmailIcon aria-hidden="true" />
          E-mail
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full h-full max-w-28 p-2 rounded-full text-base font-semibold text-dark-slate-800 transition-all duration-300 ease-in-out md:max-w-33.5 md:text-xl
            ${isSubmitting ? 'cursor-no-drop bg-white' : 'cursor-pointer bg-gray-400 hover:bg-white-80 active:bg-white active:scale-90'}
          `}
        >
          {isSubmitting ? (
            <LoadingIcon
              aria-hidden="true"
              className="justify-self-center w-6 text-dark-slate-900"
            />
          ) : (
            'Assinar'
          )}
        </button>
      </label>

      {errors.email?.message && (
        <InputErrorMessage id="email-error">{errors.email.message}</InputErrorMessage>
      )}
    </form>
  );
}
