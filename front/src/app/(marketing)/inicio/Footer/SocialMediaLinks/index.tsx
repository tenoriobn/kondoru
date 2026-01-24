import Link from 'next/link';
import InstagramIcon from 'public/icons/instagram.svg';
import LinkedinIcon from 'public/icons/linkedin.svg';
import YoutubeIcon from 'public/icons/youtube.svg';

export default function SocialMediaLinks() {
  const socialLinks = [
    { id: '1', href: 'https://www.instagram.com/', icon: <InstagramIcon /> },
    { id: '2', href: 'https://www.linkedin.com/', icon: <LinkedinIcon /> },
    { id: '3', href: 'http://www.youtube.com/', icon: <YoutubeIcon /> },
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          target="_blank"
          className="transition duration-300 ease-in-out hover:opacity-60"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
