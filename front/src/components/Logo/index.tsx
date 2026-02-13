import Link from 'next/link';
import LogoIcon from 'public/icons/logotipo.svg';

export default function Logo() {
  return (
    <Link rel="noopener noreferrer" href="/" aria-label="Página inicial">
      <LogoIcon className="w-35 md:w-42" />
    </Link>
  );
}
