import GoogleIcon from 'public/icons/google.svg';
import Link from 'next/link';
import { useGoogleAuth } from './useGoogleAuth';
import ErrorMessage from 'src/components/ErrorMessage';
import type { TermsAndGoogleLoginProps } from './termsAndGoogleLogin.type';

export default function TermsAndGoogleLogin({ isSubmitting }: TermsAndGoogleLoginProps) {
  const { loginWithGoogle, googleAuthError } = useGoogleAuth();

  return (
    <div className="grid gap-8">
      <p className="text-base font-light text-gray-300/60 text-center md:text-xl">
        Ao continuar, você aceita os{' '}
        <button
          disabled={isSubmitting}
          className="underline font-bold cursor-pointer transition duration-300 ease-in-out hover:text-white-80 active:text-white disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Termos de uso
        </button>{' '}
        e{' '}
        <button
          disabled={isSubmitting}
          className="underline font-bold cursor-pointer transition duration-300 ease-in-out hover:text-white-80 active:text-white disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Política de privacidade
        </button>
        , acorda em receber comunicações da{' '}
        <Link
          href={isSubmitting ? '#' : '/'}
          aria-disabled={isSubmitting}
          tabIndex={isSubmitting ? -1 : 0}
          className={`
            underline font-bold transition duration-300 ease-in-out
            ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-white-80 active:text-white'}
          `}
        >
          Kondoru
        </Link>
        , afirma ter mais de 18 anos e permite o compartilhamento de seus dados nas interações com a
        plataforma.
      </p>

      <div className="flex flex-col gap-2 w-full">
        <button
          disabled={isSubmitting}
          onClick={() => loginWithGoogle()}
          className="cursor-pointer w-full max-w-full grid grid-cols-[repeat(2,auto)] items-center justify-center gap-2 px-8 py-4 mt-2 bg-gray-400 text-dark-slate-800 rounded-full font-semibold text-base md:text-xl transition duration-300 ease-in-out hover:bg-white-80 active:bg-white disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <GoogleIcon />
          Entrar com Google
        </button>

        {googleAuthError && (
          <ErrorMessage className="text-red text-base font-light">{googleAuthError}</ErrorMessage>
        )}
      </div>
    </div>
  );
}
