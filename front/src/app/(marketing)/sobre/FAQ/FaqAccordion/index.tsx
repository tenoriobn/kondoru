import { useState, useRef } from 'react';
import faqItem from './faqItem.json';
import ArrowDownIcon from 'public/icons/arrow-down.svg';
import { useSmoothCenterScroll } from './useSmoothCenterScroll';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const itemRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  useSmoothCenterScroll(openId, itemRefs, 900);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full grid gap-4 md:gap-8">
      {faqItem.map((item) => {
        const isOpen = openId === item.id;
        const contentId = `faq-content-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <button
            key={item.id}
            ref={(el) => {
              itemRefs.current[item.id] = el;
            }}
            className="cursor-pointer text-left bg-dark-slate-800 rounded-3xl p-4 xs:p-6 md:p-8"
            id={buttonId}
            type="button"
            onClick={() => toggleItem(item.id)}
            aria-expanded={isOpen}
            aria-controls={contentId}
          >
            <h3 className="text-white text-base md:text-xl font-semibold w-full grid grid-cols-[1fr_auto] gap-2 justify-between transition-colors duration-300">
              {item.question}

              <span
                className="bg-white w-8 h-8 rounded-full grid place-items-center self-start"
                aria-hidden="true"
              >
                <ArrowDownIcon
                  className={`text-dark-slate-800 w-3 h-3 stroke-3 transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </span>
            </h3>

            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-base md:text-xl text-white-80 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
