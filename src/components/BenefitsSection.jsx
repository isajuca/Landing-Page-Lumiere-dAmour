import React from 'react';
import { Sparkles, Gem, Gift, Clock } from 'lucide-react';
import { BENEFITS } from '../data/content';

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
      className="py-16 sm:py-24 bg-lumiere-paper border-b border-lumiere-gold/25 relative overflow-hidden"
    >
      {/* Subtle decorative sage background band */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-lumiere-gold/40 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Praticidade, Prazer e Exclusividade
          </span>
          <h2
            id="benefits-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            Pequenos momentos merecem grandes experiências.
          </h2>
          <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed font-light">
            Criamos <strong className="font-serif italic font-semibold text-lumiere-ink">La Vie en Douceur</strong> para unir o prazer sensorial da alta confeitaria à praticidade que o seu dia a dia pede — permitindo celebrar qualquer ocasião com exclusividade.
          </p>
          <div className="w-20 h-px bg-lumiere-gold mx-auto" aria-hidden="true" />
        </div>

        {/* 4 Minimalist Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFITS.map((item) => {
            const IconComponent = ICON_MAP[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-lumiere-cream border border-lumiere-gold/35 p-7 flex flex-col justify-between shadow-card hover:border-lumiere-gold transition-colors duration-300"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-lumiere-paper border border-lumiere-gold/50 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-lumiere-goldDark stroke-[1.5]" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-lumiere-sage/45 text-lumiere-ink font-semibold">
                      {item.emotionalTag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-lumiere-ink leading-snug font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-lumiere-cocoa leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-lumiere-gold/20 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-lumiere-goldDark font-semibold">
                  <span>Lumière d&apos;Amour</span>
                  <span aria-hidden="true">&bull;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emotional Pillars Strip */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-lumiere-sage/30 border border-lumiere-gold/35 p-5 sm:p-6 text-center">
          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl text-lumiere-ink font-semibold block">Praticidade</span>
            <span className="text-xs text-lumiere-cocoa block">Sem espera por grandes encomendas</span>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl text-lumiere-ink font-semibold block">Prazer Sensorial</span>
            <span className="text-xs text-lumiere-cocoa block">Seis texturas e aromas complementares</span>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl text-lumiere-ink font-semibold block">Exclusividade</span>
            <span className="text-xs text-lumiere-cocoa block">Acabamento digno de alta joalheria</span>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-xl sm:text-2xl text-lumiere-ink font-semibold block">Celebração Diária</span>
            <span className="text-xs text-lumiere-cocoa block">Transforme qualquer dia em data especial</span>
          </div>
        </div>
      </div>
    </section>
  );
}
