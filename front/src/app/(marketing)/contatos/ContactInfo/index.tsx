'use client';
import { contactsInfo } from './contactsInfo';
import { useContactInfo } from './useContactInfo';

export default function ContactInfo() {
  const { openAction } = useContactInfo();

  return (
    <section aria-labelledby="contact-info-title" className="group">
      <h2 id="contact-info-title" className="sr-only">
        Informações de contato
      </h2>

      <ul className="group grid grid-cols-1 gap-y-4 md:grid-cols-2 md:items-center md:justify-center md:gap-y-7 6xl:grid-cols-4">
        {contactsInfo.map(({ id, label, value, icon, action }) => {
          return (
            <li
              key={id}
              className="
              bg-slate-40 
              transition-colors duration-300 ease-in-out
              md:border-r border-slate-14
              rounded-12 md:rounded-none
              md:max-6xl:odd:rounded-l-12 md:max-6xl:even:rounded-r-12
              6xl:first:rounded-l-12 6xl:last:rounded-r-12
              hover:bg-slate-50 active:bg-dark-slate-900
            "
            >
              <button
                type="button"
                onClick={() => openAction(action.href)}
                aria-label={`${label}: ${value}`}
                className="cursor-pointer grid place-items-center gap-1 py-4 px-6 text-white w-full"
              >
                <span className="flex items-center gap-2 text-2xl whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                  {icon}
                  <span>{label}</span>
                </span>

                <span className="text-xl">{value}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
