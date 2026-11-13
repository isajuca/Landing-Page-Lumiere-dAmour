import React from 'react';
import { Sparkles, Gem, Gift, Clock } from 'lucide-react';
import { BENEFITS } from '../data/content';
import {
  RevealOnScroll,
  GoldFleuronDivider,
  CurvedSectionDivider
} from './Ornaments';

const ICON_MAP = {
  Sparkles,
  Gem,
  Gift,
  Clock
};

export default function BenefitsSection() {
  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-heading"
      className="pt-12 sm:pt-20 bg-lumiere-paper relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        {/* Section Heading */}
        <RevealOnScroll className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Praticidade, Prazer e Exclusividade
          </span>
          <h2
            id="benefits-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            Pequenos momentos merecem grandes experiências.
          </h2>
          <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed max-w-2xl mx-auto">
            Criamos <strong className="font-serif italic font-semibold text-lumiere-ink">La Vie en Douceur</strong> para unir o encanto sensorial da alta confeitaria à leveza que o seu cotidiano pede.
          </p>
          <GoldFleuronDivider variant="floral" className="pt-1" />
        </RevealOnScroll>

        {/* 4 Open, Airy Editorial Columns — No Heavy Rectangular Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-x-8 lg:gap-x-0 lg:divide-x lg:divide-lumiere-gold/25">
          {BENEFITS.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || Sparkles;
            const isEven = idx % 2 === 1;

            return (
              <RevealOnScroll
                key={item.id}
                delay={idx * 100}
                className="lg:px-8 flex flex-col items-center text-center space-y-4 group"
              >
                {/* Delicate Oval/Circular Medallion with Fine Icon */}
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center border border-lumiere-gold/60 transition-transform duration-500 group-hover:scale-105 ${
                      isEven ? 'bg-lumiere-sage/40' : 'bg-lumiere-rose/45'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-lumiere-cream/90 border border-lumiere-gold/40 flex items-center justify-center">
                      <IconComponent
                        className="w-5 h-5 text-lumiere-goldDark stroke-[1.25]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                {/* Emotional Pillar Tag */}
                <span className="text-[10px] uppercase tracking-[0.22em] text-lumiere-goldDark font-bold">
                  {item.emotionalTag}
                </span>

                {/* Benefit Title */}
                <h3 className="font-serif text-2xl text-lumiere-ink leading-snug font-normal max-w-[15rem]">
                  {item.title}
                </h3>

                {/* Subtle Golden Thread */}
                <span className="w-8 h-px bg-lumiere-gold/50" aria-hidden="true" />

                {/* Description */}
                <p className="text-sm text-lumiere-cocoa leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Flowing Emotional Essence Ribbon */}
        <RevealOnScroll className="mt-16 sm:mt-20 pt-10 border-t border-lumiere-gold/25">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
            {[
              { label: 'Praticidade', note: 'sem espera por longas encomendas' },
              { label: 'Prazer', note: 'seis texturas e aromas artesanais' },
              { label: 'Exclusividade', note: 'apresentação digna de joalheria' },
              { label: 'Celebração', note: 'para tornar especial qualquer ocasião' }
            ].map((pillar, i, arr) => (
              <React.Fragment key={pillar.label}>
                <div className="inline-flex items-baseline gap-2">
                  <span className="font-script text-2xl sm:text-3xl text-lumiere-goldDark">
                    {pillar.label}
                  </span>
                  <span className="text-xs sm:text-sm text-lumiere-cocoa italic font-serif">
                    — {pillar.note}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <span className="hidden md:inline-block text-lumiere-gold text-xs" aria-hidden="true">
                    &#10022;
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      <CurvedSectionDivider fill="#F7F2E9" />
    </section>
  );
}
