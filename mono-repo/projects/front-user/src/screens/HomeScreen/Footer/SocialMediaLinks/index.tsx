import Link from 'next/link';
import InstagramIcon from 'public/icons/instagram.svg';
import LinkedinIcon from 'public/icons/linkedin.svg';
import YoutubeIcon from 'public/icons/youtube.svg';
import styled from 'styled-components';

const StyledContainerSocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledSocialLink = styled(Link)`
  transition: ${({ theme }) => theme.transitions.smoothTransition};

  &:hover {
    opacity: .6;
  }
`;

const socialLinks = [
  { href: 'https://www.instagram.com/', icon: <InstagramIcon /> },
  { href: 'https://www.linkedin.com/', icon: <LinkedinIcon /> },
  { href: 'http://www.youtube.com/', icon: <YoutubeIcon /> },
];

export default function SocialMediaLinks() {
  return (
    <StyledContainerSocialLinks>
      {socialLinks.map((link, index) => (
        <StyledSocialLink key={index} href={link.href} target='_blank'>
          {link.icon}
        </StyledSocialLink>
      ))}
    </StyledContainerSocialLinks>
  );
}
