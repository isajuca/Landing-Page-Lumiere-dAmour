import React, { useState } from 'react';
import { Sparkles, Ribbon, PackageCheck } from 'lucide-react';
import { DESSERTS } from '../data/content';

export default function ProductShowcaseSection({ onNavigateToForm }) {
  const [selectedDessertId, setSelectedDessertId] = useState(DESSERTS[0].id);
  const activeDessert = DESSERTS.find((d) => d.id === selectedDessertId) || DESSERTS[0];

  return (
    <section
      id="colecao"
      aria-labelledby="product-heading"
      className="py-16 sm:py-24 bg-lumiere-cream border-b border-lumiere-gold/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Menu Degustação Assinatura
          </span>
          <h2
            id="product-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            La Vie en Douceur: seis pequenas obras de arte.
          </h2>
          <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed font-light">
            Uma curadoria autoral que une a precisão técnica da <em>pâtisserie</em> francesa à alma calorosa e aos sabores tropicais do Brasil em uma experiência artesanal única.
          </p>
          <div className="w-20 h-px bg-lumiere-gold mx-auto" aria-hidden="true" />
        </div>

        {/* Studio Top-View Box & Interactive Tasting Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 bg-lumiere-paper border border-lumiere-gold/40 p-5 sm:p-8 lg:p-10 shadow-editorial">
          {/* Top-down Box Studio Image */}
          <div className="lg:col-span-6">
            <figure className="relative bg-lumiere-cream p-3 border border-lumiere-gold/40">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="/images/product-topview.jpg"
                  alt="Fotografia de estúdio vista de cima da caixa rígida off-white La Vie en Douceur aberta com seis sobremesas organizadas em divisórias individuais, detalhes dourados e laço de cetim rosa-claro"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-2.5 flex items-center justify-between text-xs text-lumiere-cocoa">
                <span className="font-serif italic text-sm text-lumiere-ink">
                  Apresentação oficial na caixa rígida com 6 berços individuais
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-lumiere-goldDark font-semibold">
                  R$ 89,90
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Packaging & Interactive Spotlight */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.22em] text-lumiere-goldDark font-bold">
                A Embalagem &bull; Design de Joalheria
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-lumiere-ink">
                Pensada para encantar antes mesmo do primeiro sabor
              </h3>
              <p className="text-sm sm:text-base text-lumiere-cocoa leading-relaxed">
                Os seis doces são acomodados em uma <strong className="text-lumiere-ink font-semibold">caixa rígida off-white</strong> com divisórias individuais que preservam a integridade de cada peça, acabamento em <strong className="text-lumiere-ink font-semibold">dourado champagne</strong>, <strong className="text-lumiere-ink font-semibold">laço de cetim rosa-claro</strong> e o brasão da Lumière d&apos;Amour.
              </p>
            </div>

            {/* Interactive Selector Pills */}
            <div className="pt-2 border-t border-lumiere-gold/25">
              <p className="text-xs uppercase tracking-[0.2em] text-lumiere-muted mb-3">
                Explore cada divisória da caixa:
              </p>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Seleção das seis sobremesas">
                {DESSERTS.map((dessert) => {
                  const isSelected = dessert.id === selectedDessertId;
                  return (
                    <button
                      key={dessert.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setSelectedDessertId(dessert.id)}
                      className={`px-3.5 py-2 text-xs transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold ${
                        isSelected
                          ? 'bg-lumiere-ink text-lumiere-cream border-lumiere-gold font-bold shadow-sm'
                          : 'bg-lumiere-cream text-lumiere-cocoa border-lumiere-gold/35 hover:border-lumiere-gold'
                      }`}
                    >
                      <span className="text-lumiere-gold mr-1.5 font-serif">{dessert.number}.</span>
                      {dessert.name}
                    </button>
                  );
                })}
              </div>

              {/* Active Dessert Preview Panel */}
              <div
                role="tabpanel"
                className="mt-4 p-4 sm:p-5 bg-lumiere-cream border border-lumiere-gold/35 flex flex-col sm:flex-row gap-4 items-center"
              >
                <img
                  src={activeDessert.image}
                  alt={activeDessert.imageAlt}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover border border-lumiere-gold/40 shrink-0"
                />
                <div className="space-y-1.5 text-center sm:text-left">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-lumiere-goldDark font-bold">
                    Peça {activeDessert.number} de 06 &bull; {activeDessert.frenchTechnique}
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-lumiere-ink">
                    {activeDessert.shortTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-lumiere-cocoa leading-relaxed">
                    {activeDessert.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All 6 Desserts Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {DESSERTS.map((dessert) => (
            <article
              key={dessert.id}
              className="group bg-lumiere-paper border border-lumiere-gold/35 hover:border-lumiere-gold transition-all duration-500 shadow-card hover:shadow-editorial flex flex-col justify-between"
            >
              <div>
                {/* Macro Photograph */}
                <div className="relative overflow-hidden aspect-[4/3] bg-lumiere-cream border-b border-lumiere-gold/25">
                  <img
                    src={dessert.image}
                    alt={dessert.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-lumiere-cream/95 border border-lumiere-gold/50 px-3 py-1 font-serif text-sm font-semibold text-lumiere-ink">
                    Nº {dessert.number}
                  </span>
                </div>

                {/* Card Copy */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.18em] text-lumiere-goldDark font-bold">
                    <span>{dessert.frenchTechnique}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-lumiere-ink leading-snug font-semibold">
                    {dessert.shortTitle}
                  </h3>

                  <p className="text-sm text-lumiere-cocoa leading-relaxed">
                    {dessert.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Brazilian Soul & Sensory Note */}
              <div className="px-6 pb-6 pt-3 border-t border-lumiere-gold/20 space-y-1.5 bg-lumiere-cream/50">
                <div className="text-[11px] text-lumiere-ink">
                  <span className="uppercase tracking-[0.15em] text-lumiere-goldDark font-bold mr-1.5">
                    Toque Brasileiro:
                  </span>
                  <span>{dessert.brazilianTouch}</span>
                </div>
                <p className="text-xs italic font-serif text-lumiere-muted">
                  &ldquo;{dessert.sensoryNotes}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Packaging Summary Strip */}
        <div className="mt-12 bg-lumiere-rose/35 border border-lumiere-gold/40 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
            <div className="w-12 h-12 rounded-full bg-lumiere-paper border border-lumiere-gold/50 flex items-center justify-center shrink-0">
              <Ribbon className="w-5 h-5 text-lumiere-goldDark" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-lumiere-ink font-semibold">
                Uma seleção ideal para presentear, compartilhar ou celebrar o seu momento
              </h3>
              <p className="text-sm text-lumiere-cocoa mt-0.5">
                Caixa completa com as 6 unidades por <strong className="text-lumiere-ink">R$ 89,90</strong> &bull; Disponível à pronta entrega conforme estoque da boutique.
              </p>
            </div>
          </div>

          <a
            href="#reserva"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToForm();
            }}
            className="btn-luxury-primary shrink-0"
          >
            <PackageCheck className="w-4 h-4 text-lumiere-gold" aria-hidden="true" />
            <span>Reservar minha caixa</span>
          </a>
        </div>
      </div>
    </section>
  );
}
