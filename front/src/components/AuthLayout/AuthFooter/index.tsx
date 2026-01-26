import Link from 'next/link';
import type { AuthFooterProps } from './authFooter.type';

export default function AuthFooter({ message, linkText, linkHref }: AuthFooterProps) {
  return (
    <p className="text-gray-300/60 text-base md:text-xl font-light text-center mt-4">
      {message}{' '}
      <Link
        href={linkHref}
        className="font-bold underline transition duration-300 ease-in-out hover:text-white-80 active:text-white"
      >
        {linkText}
      </Link>
    </p>
  );
}
