import Link from 'next/link';
import type { AuthFooterProps } from './authFooter.type';

export default function AuthFooter({ message, linkText, linkHref, isSubmitting }: AuthFooterProps) {
  return (
    <p className="text-gray-300/60 text-base md:text-xl font-light text-center mt-4">
      {message}{' '}
      <Link
        href={isSubmitting ? '#' : linkHref}
        aria-disabled={isSubmitting}
        tabIndex={isSubmitting ? -1 : 0}
        className={`
          font-bold underline transition duration-300 ease-in-out
          ${isSubmitting ? 'cursor-not-allowed' : 'hover:text-white-80 active:text-white'}
        `}
      >
        {linkText}
      </Link>
    </p>
  );
}
