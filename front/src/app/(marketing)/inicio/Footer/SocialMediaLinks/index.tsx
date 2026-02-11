import Link from 'next/link';
import { socialLinks } from './socialLinks';

export default function SocialMediaLinks() {
  return (
    <nav aria-label="Redes sociais da KondoRu">
      <ul className="flex items-center justify-center gap-4">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <Link
              rel="noopener noreferrer"
              href={link.href}
              target="_blank"
              aria-label={link.label}
              className="transition duration-300 ease-in-out hover:opacity-60"
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
