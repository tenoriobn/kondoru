import Link from 'next/link';
import type { ForgotPasswordLinkProps } from './forgotPasswordLink.type';

export default function ForgotPasswordLink({ isSubmitting }: ForgotPasswordLinkProps) {
  return (
    <nav aria-label="Recuperação de senha">
      <Link
        rel="noopener noreferrer"
        href={isSubmitting ? '#' : '/recuperar-senha'}
        aria-disabled={isSubmitting}
        tabIndex={isSubmitting ? -1 : 0}
        className={`
          text-base text-center underline font-light text-gray-300/60 transition duration-300 ease-in-out md:text-xl  
          ${isSubmitting ? 'cursor-not-allowed' : 'hover:text-white-80 active:text-white'}
        `}
      >
        Esqueceu a senha?
      </Link>
    </nav>
  );
}
