import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function FinalCtaSection({ onNavigateToForm }) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="py-16 sm:py-24 bg-lumiere-cream border-b border-lumiere-gold/30 relative overflow-hidden"
    >
      {/* Subtle Romantic Backdrop */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] rounded-full bg-lumiere-rose/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-lumiere-paper border border-lumiere-gold/50 shadow-editorial overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Column: Striking Editorial Product Image */}
            <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto lg:h-full">
              <img
                src="/images/hero-box.jpg"
                alt="Composição elegante da caixa La Vie en Douceur da Lumière d'Amour com as seis mini sobremesas artesanais franco-brasileiras"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-3 border border-lumiere-cream/65 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Right Column: Emotional Final Call to Action */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-lumiere-rose/45 border border-lumiere-gold/40">
                <Sparkles className="w-3.5 h-3.5 text-lumiere-goldDark" aria-hidden="true" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-lumiere-ink font-semibold">
                  La Vie en Douceur &bull; R$ 89,90
                </span>
              </div>

              <h2
                id="final-cta-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-lumiere-ink leading-[1.15] font-normal"
              >
                A vida fica mais doce quando celebramos os pequenos momentos.
              </h2>

              <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed font-light">
                Descubra La Vie en Douceur e permita-se viver uma experiência de sabor, delicadeza e amor.
              </p>

              <div className="pt-2">
                <a
                  href="#reserva"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToForm();
                  }}
                  className="btn-luxury-primary group w-full sm:w-auto"
                >
                  <span>Quero minha La Vie en Douceur</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-lumiere-gold group-hover:text-lumiere-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <p className="text-xs text-lumiere-muted pt-1">
                Caixa rígida com 6 mini sobremesas franco-brasileiras &bull; Disponibilidade à pronta entrega sujeita ao estoque da boutique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
