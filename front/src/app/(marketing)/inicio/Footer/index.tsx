'use client';
import { useState } from 'react';
import StatusMessage from 'src/components/StatusMessage';
import CheckIcon from 'public/icons/check.svg';
import SocialMediaLinks from './SocialMediaLinks';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  const [showNewsletterForm, setShowNewsletterForm] = useState(true);
  const year = new Date().getFullYear();

  return (
    <footer className="grid justify-center bg-gradient-dark-slate px-4 sm:px-6 lg:px-8 pt-25 pb-16 md:pt-32">
      <div className="grid items-center gap-y-8 mb-25 max-w-131.5 md:mb-32">
        {showNewsletterForm ? (
          <>
            <p className="text-xl text-center text-white ">
              Inscreva-se para receber as melhores oportunidades e tendências no setor imobiliário
              direto no seu e-mail!
            </p>

            <NewsletterForm setShowNewsletterForm={setShowNewsletterForm} />
          </>
        ) : (
          <StatusMessage
            message="Inscrição realizada com sucesso!"
            Icon={CheckIcon}
            className="text-green"
          />
        )}

        <SocialMediaLinks />
      </div>

      <p className="text-xl text-center text-white ">{year} © Todos os direitos reservados.</p>
    </footer>
  );
}
