import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';
import {
  RevealOnScroll,
  GoldFleuronDivider,
  CurvedSectionDivider
} from './Ornaments';

export default function FaqSection() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0].id);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="pt-12 sm:pt-20 bg-lumiere-paper relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        {/* Section Title */}
        <RevealOnScroll className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Esclarecimentos &amp; Cuidados
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            Ainda tem alguma dúvida?
          </h2>
          <p className="text-base text-lumiere-cocoa leading-relaxed max-w-xl mx-auto">
            Informações essenciais sobre pronta entrega, apresentação para presente, consumo na boutique e alergênicos.
          </p>
          <GoldFleuronDivider variant="floral" className="pt-1" />
        </RevealOnScroll>

        {/* Minimalist Fine-Line Accordion */}
        <RevealOnScroll className="border-t border-b border-lumiere-gold/40 divide-y divide-lumiere-gold/25">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
              <div key={item.id} className="py-2 transition-colors duration-300">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 px-2 text-left flex items-center justify-between gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold rounded-lg"
                  >
                    <span className="font-serif text-xl sm:text-2xl font-normal text-lumiere-ink group-hover:text-lumiere-goldDark transition-colors flex items-baseline gap-4">
                      <span className="font-serif italic text-base text-lumiere-goldDark shrink-0">
                        0{index + 1}
                      </span>
                      <span>{item.question}</span>
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-lumiere-rose/55 border-lumiere-gold text-lumiere-ink'
                          : 'border-lumiere-gold/45 text-lumiere-goldDark group-hover:border-lumiere-gold'
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 stroke-[1.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[1.5]" />
                      )}
                    </span>
                  </button>
                </h3>

                {/* Smooth Grid Row Height Transition */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-9 pr-4 text-sm sm:text-base text-lumiere-cocoa leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </RevealOnScroll>
      </div>

      <CurvedSectionDivider fill="#F7F2E9" />
    </section>
  );
}
