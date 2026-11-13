import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import {
  RevealOnScroll,
  GoldFleuronDivider,
  FloralSprig,
  SatinBowAccent
} from './Ornaments';

export default function FinalCtaSection({ onNavigateToForm }) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="py-16 sm:py-24 bg-lumiere-cream relative overflow-hidden"
    >
      {/* Soft Romantic Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-gradient-to-r from-lumiere-rose/30 via-lumiere-paper to-lumiere-sage/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <RevealOnScroll className="relative rounded-[3rem] bg-gradient-to-br from-lumiere-paper via-lumiere-cream to-lumiere-rose/35 border border-lumiere-gold/55 p-7 sm:p-12 lg:p-16 shadow-editorial">
          <FloralSprig className="w-32 sm:w-40 absolute -top-6 left-6 z-20 opacity-90" />
          <FloralSprig flip className="w-32 sm:w-40 absolute -bottom-6 right-6 z-20 opacity-90" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Arched Product Portrait */}
            <div className="lg:col-span-5">
              <div className="french-arch bg-lumiere-paper p-3 border border-lumiere-gold/55 shadow-card max-w-md mx-auto">
                <div className="relative overflow-hidden french-arch aspect-[4/3]">
                  <img
                    src="/images/hero-box.jpg"
                    alt="Composição elegante da caixa La Vie en Douceur da Lumière d'Amour com as seis mini sobremesas artesanais franco-brasileiras"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div
                    className="absolute inset-2.5 french-arch border border-lumiere-cream/70 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Emotional Final Invitation */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lumiere-rose/50 border border-lumiere-gold/45">
                <Sparkles className="w-3.5 h-3.5 text-lumiere-goldDark" aria-hidden="true" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-lumiere-ink font-semibold">
                  La Vie en Douceur &bull; R$ 89,90
                </span>
              </div>

              <h2
                id="final-cta-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] text-lumiere-ink leading-[1.14] font-normal"
              >
                A vida fica mais doce quando celebramos os pequenos momentos.
              </h2>

              <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed max-w-xl mx-auto lg:mx-0">
                Descubra <strong className="font-serif italic font-semibold text-xl text-lumiere-ink">La Vie en Douceur</strong> e permita-se viver uma experiência de sabor, delicadeza e amor.
              </p>

              <GoldFleuronDivider className="lg:justify-start pt-1" />

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
        </RevealOnScroll>
      </div>
    </section>
  );
}
