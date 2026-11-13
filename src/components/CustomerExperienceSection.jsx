import React from 'react';
import { Gift, Coffee, Award } from 'lucide-react';
import { OCCASIONS } from '../data/content';
import {
  RevealOnScroll,
  GoldFleuronDivider,
  FloralSprig,
  CurvedSectionDivider
} from './Ornaments';

const OCCASION_ICONS = {
  presentear: Gift,
  compartilhar: Coffee,
  celebrar: Award
};

export default function CustomerExperienceSection() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="pt-12 sm:pt-20 bg-lumiere-paper relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        {/* Section Heading */}
        <RevealOnScroll className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-18">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            L&apos;Art de Vivre
          </span>
          <h2
            id="experience-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            Uma experiência para saborear, compartilhar e recordar.
          </h2>
          <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed max-w-2xl mx-auto">
            Seja em uma mesa acolhedora dentro da nossa confeitaria ou no conforto da sua casa, <strong className="font-serif italic font-semibold text-lumiere-ink">La Vie en Douceur</strong> transforma o instante em memória afetiva.
          </p>
          <GoldFleuronDivider variant="floral" className="pt-1" />
        </RevealOnScroll>

        {/* Wide Editorial Photograph + Legible Emotional Quote Overlay */}
        <RevealOnScroll className="mb-20 sm:mb-24 relative">
          <FloralSprig flip className="w-32 absolute -top-5 right-4 z-20 opacity-90" />

          <div className="relative rounded-[2.75rem] bg-lumiere-cream p-3 sm:p-5 border border-lumiere-gold/55 shadow-editorial">
            <div className="relative overflow-hidden rounded-[2.25rem] aspect-[16/10] sm:aspect-[21/10]">
              <img
                src="/images/experience-couple.jpg"
                alt="Duas pessoas adultas compartilhando as sobremesas da caixa La Vie en Douceur em uma mesa elegante dentro da confeitaria Lumière d'Amour, com flores rosa-claro, detalhes dourados e iluminação quente"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-103"
              />
              <div
                className="absolute inset-3 rounded-[1.85rem] border border-lumiere-cream/65 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Legible Emotional Overlay Card */}
            <div className="relative lg:absolute lg:bottom-8 lg:left-8 lg:right-8 mt-4 lg:mt-0 z-20 max-w-2xl mx-auto lg:mx-0 bg-lumiere-paper/95 backdrop-blur-md border border-lumiere-gold/60 rounded-3xl p-6 sm:p-8 shadow-editorial">
              <span className="font-script text-2xl sm:text-3xl text-lumiere-goldDark block mb-1">
                O encanto de abrir o laço de cetim...
              </span>
              <p className="font-serif text-xl sm:text-2xl italic text-lumiere-ink leading-relaxed">
                &ldquo;Há momentos que pedem pausa: o perfume sutil de baunilha ao erguer a tampa, o brilho do chocolate espelhado e a alegria silenciosa de dividir seis pequenas joias com quem torna a vida mais doce.&rdquo;
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Three Consumption Occasions — Arched Editorial Triptych */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {OCCASIONS.map((occasion, idx) => {
            const Icon = OCCASION_ICONS[occasion.id] || Gift;
            const isCenter = idx === 1;

            return (
              <RevealOnScroll
                key={occasion.id}
                delay={idx * 120}
                as="article"
                className={`relative french-arch p-8 sm:p-9 border transition-all duration-500 flex flex-col justify-between text-center ${
                  isCenter
                    ? 'bg-gradient-to-b from-lumiere-rose/40 via-lumiere-cream to-lumiere-paper border-lumiere-gold/65 shadow-editorial md:-translate-y-3'
                    : 'bg-lumiere-cream/90 border-lumiere-gold/40 shadow-card hover:border-lumiere-gold'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Medallion Icon */}
                  <div className="w-14 h-14 rounded-full bg-lumiere-paper border border-lumiere-gold/55 flex items-center justify-center mx-auto shadow-sm">
                    <Icon className="w-5 h-5 text-lumiere-goldDark stroke-[1.3]" aria-hidden="true" />
                  </div>

                  <span className="inline-block text-[10px] uppercase tracking-[0.22em] px-3.5 py-1 rounded-full bg-lumiere-sage/45 text-lumiere-ink font-semibold">
                    {occasion.tag}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl text-lumiere-ink font-normal">
                    {occasion.title}
                  </h3>

                  <p className="text-sm sm:text-base text-lumiere-cocoa leading-relaxed">
                    {occasion.description}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-lumiere-gold/25">
                  <span className="font-serif italic text-base text-lumiere-goldDark">
                    {occasion.highlight}
                  </span>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>

      <CurvedSectionDivider fill="#F7F2E9" />
    </section>
  );
}
