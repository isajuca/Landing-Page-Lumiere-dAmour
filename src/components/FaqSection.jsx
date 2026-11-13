import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export default function FaqSection() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0].id);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 bg-lumiere-paper border-b border-lumiere-gold/25"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Esclarecimentos &amp; Cuidados
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            Ainda tem alguma dúvida?
          </h2>
          <p className="text-base text-lumiere-cocoa leading-relaxed font-light max-w-2xl mx-auto">
            Reunimos abaixo as principais informações sobre disponibilidade, composição, apresentação para presente e consumo em nossa boutique.
          </p>
          <div className="w-20 h-px bg-lumiere-gold mx-auto" aria-hidden="true" />
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
              <div
                key={item.id}
                className={`border transition-colors duration-300 ${
                  isOpen
                    ? 'bg-lumiere-cream border-lumiere-gold shadow-card'
                    : 'bg-lumiere-cream/65 border-lumiere-gold/35 hover:border-lumiere-gold/70'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold"
                  >
                    <span className="font-serif text-xl sm:text-2xl font-semibold text-lumiere-ink flex items-baseline gap-3">
                      <span className="text-xs font-sans uppercase tracking-[0.18em] text-lumiere-goldDark">
                        0{index + 1}.
                      </span>
                      <span>{item.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-lumiere-goldDark shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-6 pb-6 pt-1 text-sm sm:text-base text-lumiere-cocoa leading-relaxed border-t border-lumiere-gold/20"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
