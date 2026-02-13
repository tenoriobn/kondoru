import GmailIcon from 'public/icons/gmail.svg';
import WhatsappIcon from 'public/icons/whatsapp.svg';
import TelegramIcon from 'public/icons/telegram.svg';
import SkypeIcon from 'public/icons/skype.svg';

const WHATSAPP_NUMBER = '5511999999999';

const WHATSAPP_MESSAGE = encodeURIComponent('Olá! 👋 Gostaria de falar com o suporte da KondoRu.');

export const socialContactIcons = [
  {
    id: 'gmail',
    label: 'Enviar email para KondoRu',
    href: 'mailto:contato@kondoru.com.br',
    icon: <GmailIcon aria-hidden="true" className="[&_path]:stroke-2" />,
  },
  {
    id: 'whatsapp',
    label: 'Conversar no WhatsApp',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
    icon: <WhatsappIcon aria-hidden="true" className="[&_path]:stroke-2" />,
  },
  {
    id: 'telegram',
    label: 'Abrir Telegram',
    href: 'https://t.me/kondoru_support',
    icon: <TelegramIcon aria-hidden="true" className="[&_path]:stroke-2" />,
  },
  {
    id: 'skype',
    label: 'Abrir Skype',
    href: 'skype:kondoru.support?chat',
    icon: <SkypeIcon aria-hidden="true" className="[&_path]:stroke-2" />,
  },
];
