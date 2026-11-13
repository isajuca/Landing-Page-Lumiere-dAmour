import React from 'react';
import { Gift, Coffee, Award } from 'lucide-react';
import { OCCASIONS } from '../data/content';

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
      className="py-16 sm:py-24 bg-lumiere-paper border-b border-lumiere-gold/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Momentos Lumière d&apos;Amour
          </span>
          <h2
            id="experience-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            Uma experiência para saborear, compartilhar e recordar.
          </h2>
          <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed font-light">
            Seja em uma mesa acolhedora dentro da nossa boutique ou no conforto da sua casa, <strong className="font-serif italic font-semibold text-lumiere-ink">La Vie en Douceur</strong> transforma o instante em memória afetiva.
          </p>
          <div className="w-20 h-px bg-lumiere-gold mx-auto" aria-hidden="true" />
        </div>

        {/* Main Lifestyle Image Feature */}
        <div className="mb-14 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-lumiere-cream border border-lumiere-gold/45 shadow-editorial overflow-hidden">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto">
              <img
                src="/images/experience-couple.jpg"
                alt="Duas pessoas adultas compartilhando as sobremesas da caixa La Vie en Douceur em uma mesa elegante dentro da confeitaria Lumière d'Amour, com flores rosa-claro, detalhes dourados e iluminação quente"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5 border-t lg:border-t-0 lg:border-l border-lumiere-gold/30">
              <span className="text-[11px] uppercase tracking-[0.24em] text-lumiere-goldDark font-bold">
                O Ritual da Degustação
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-lumiere-ink leading-snug">
                O encanto de abrir o laço de cetim e escolher por qual doce começar
              </h3>
              <p className="text-sm sm:text-base text-lumiere-cocoa leading-relaxed">
                Cada detalhe da experiência foi desenhado para despertar os sentidos: o toque aveludado da caixa rígida off-white, o perfume delicado de baunilha e frutas frescas ao erguer a tampa e a descoberta de seis receitas que convidam à conversa e à contemplação.
              </p>
              <div className="pt-2 border-t border-lumiere-gold/25">
                <p className="font-script text-2xl text-lumiere-goldDark">
                  &ldquo;Detalhes refinados para celebrar o amor.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Consumption Occasions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
          {OCCASIONS.map((occasion, idx) => {
            const Icon = OCCASION_ICONS[occasion.id] || Gift;
            return (
              <article
                key={occasion.id}
                className="bg-lumiere-cream border border-lumiere-gold/35 p-7 sm:p-8 flex flex-col justify-between shadow-card hover:border-lumiere-gold transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.2em] px-3 py-1 bg-lumiere-rose/45 text-lumiere-ink font-semibold">
                      {occasion.tag}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-lumiere-paper border border-lumiere-gold/45 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-lumiere-goldDark" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-lumiere-ink font-semibold">
                    {occasion.title}
                  </h3>

                  <p className="text-sm text-lumiere-cocoa leading-relaxed">
                    {occasion.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-lumiere-gold/25 flex items-center justify-between text-xs text-lumiere-ink font-serif italic">
                  <span>{occasion.highlight}</span>
                  <span className="not-italic text-lumiere-gold font-sans text-[11px]">0{idx + 1}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
