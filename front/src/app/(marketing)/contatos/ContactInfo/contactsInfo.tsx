import EmailIcon from 'public/icons/email.svg';
import PhoneIcon from 'public/icons/phone.svg';
import LocationIcon from 'public/icons/location.svg';
import CalendarIcon from 'public/icons/calendar.svg';

export const contactsInfo = [
  {
    id: 'email',
    label: 'Email',
    value: 'contato@kondoru.com.br',
    action: {
      type: 'email',
      href: 'mailto:contato@kondoru.com.br',
    },
    icon: <EmailIcon aria-hidden="true" />,
  },
  {
    id: 'phone',
    label: 'Telefone',
    value: '(11) 99999-9999',
    action: {
      type: 'phone',
      href: 'tel:+5511999999999',
    },
    icon: <PhoneIcon aria-hidden="true" />,
  },
  {
    id: 'location',
    label: 'Localização',
    value: 'Av. Paulista, 2084 — SP',
    action: {
      type: 'map',
      href: 'https://www.google.com/maps?q=Av.+Paulista,+2084+-+Bela+Vista,+São+Paulo+-+SP,+01311-300',
    },
    icon: <LocationIcon aria-hidden="true" />,
  },
  {
    id: 'businessHours',
    label: 'Atendimento',
    value: 'Seg–Sex · 9h às 18h',
    action: {
      type: 'whatsapp',
      href: 'https://wa.me/5511999999999?text=Olá! Gostaria de agendar um atendimento.',
    },
    icon: <CalendarIcon aria-hidden="true" />,
  },
];
