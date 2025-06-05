import styled from 'styled-components';
import SocialMediaLinks from './SocialMediaLinks';
import { useHomePageData } from 'Home/HomePageProvider';
import NewsletterForm from './NewsletterForm';
import { useState } from 'react';
import StatusMessage from 'src/components/StatusMessage';
import CheckIcon from 'public/icons/check.svg';
import { horizontalPadding } from 'src/styles';

const Styled = {
  Footer: styled.footer`
    display: grid;
    justify-content: center;

    background: ${({ theme }) => theme.colors['gradient-dark-slate']};
    ${horizontalPadding};

    padding-top: 6.25rem;
    padding-bottom: 4rem;

    @media (min-width: 768px) {
      padding-top: 8rem;
    }
  `,

  ContainerFooter: styled.div`
    display: grid;
    align-items: center;
    row-gap: 2rem;
    margin-bottom: 6.25rem;

    max-width: 526px;

    @media (min-width: 768px) {
      margin-bottom: 8rem;
    }
  `,

  Paragraph: styled.p`
    color:  ${({ theme }) => theme.colors['white']};
    font-size: 1.25rem;
    text-align: center;
  `,
};

export default function Footer() {
  const { footer } = useHomePageData();
  const [showNewsletterForm, setShowNewsletterForm] = useState(true);
  
  return (
    <Styled.Footer>
      <Styled.ContainerFooter>
        {showNewsletterForm ? (
          <>          
            <Styled.Paragraph>
              {footer.title}
            </Styled.Paragraph>

            <NewsletterForm setShowNewsletterForm={setShowNewsletterForm} />
          </>
        ) : (
          <StatusMessage
            message='Inscrição realizada com sucesso!'
            icon={CheckIcon}
            color="green"
          />
        )}
        
        <SocialMediaLinks />
      </Styled.ContainerFooter>

      <Styled.Paragraph>{footer.year} {footer.description}</Styled.Paragraph>
    </Styled.Footer>
  );
}