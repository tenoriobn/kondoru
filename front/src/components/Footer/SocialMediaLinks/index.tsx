import Link from 'next/link';
import { socialLinks } from './socialLinks';

export default function SocialMediaLinks() {
  return (
    <nav aria-label="Redes sociais da KondoRu">
      <ul className="flex items-center justify-center gap-4">
        {socialLinks.map((link) => (
          <li
            key={link.id}
            className="opacity-100 hover:opacity-75 active:opacity-60 active:scale-90 transition-all duration-300 ease-in-out"
          >
            <Link
              rel="noopener noreferrer"
              href={link.href}
              target="_blank"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
