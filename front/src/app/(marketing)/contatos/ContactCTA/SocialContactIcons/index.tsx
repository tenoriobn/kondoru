import { socialContactIcons } from './socialContactIcons';

export default function SocialContactIcons() {
  return (
    <nav aria-label="Canais de suporte da KondoRu" className="mt-8">
      <ul className="flex items-center justify-center gap-4">
        {socialContactIcons.map(({ id, label, href, icon }) => (
          <li
            key={id}
            className="opacity-100 hover:opacity-90 active:opacity-75 active:scale-90 transition-all duration-300 ease-in-out"
          >
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
