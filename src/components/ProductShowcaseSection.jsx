import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { DESSERTS } from '../data/content';
import {
  RevealOnScroll,
  GoldFleuronDivider,
  FloralSprig,
  SatinBowAccent,
  CurvedSectionDivider
} from './Ornaments';

export default function ProductShowcaseSection({ onNavigateToForm }) {
  const [selectedDessertId, setSelectedDessertId] = useState(DESSERTS[0].id);
  const activeDessert = DESSERTS.find((d) => d.id === selectedDessertId) || DESSERTS[0];

  return (
    <section
      id="colecao"
      aria-labelledby="product-heading"
      className="pt-12 sm:pt-20 bg-lumiere-cream relative overflow-hidden"
    >
      {/* Subtle Ambient Watercolor Accents */}
      <div
        className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-lumiere-rose/35 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-lumiere-sage/35 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 relative">
        {/* Section Heading */}
        <RevealOnScroll className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Menu Degustação Assinatura
          </span>
          <h2
            id="product-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            La Vie en Douceur:{' '}
            <span className="italic text-lumiere-goldDark">seis pequenas obras de arte.</span>
          </h2>
          <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed max-w-2xl mx-auto">
            Uma experiência de degustação artesanal que combina o rigor das técnicas francesas com a criatividade e os sabores vibrantes do Brasil.
          </p>
          <GoldFleuronDivider variant="floral" className="pt-1" />
        </RevealOnScroll>

        {/* Part 1: The Luxury Box & Interactive Tasting Map */}
        <RevealOnScroll className="mb-20 sm:mb-28">
          <div className="relative rounded-[2.75rem] bg-gradient-to-br from-lumiere-paper via-lumiere-cream to-lumiere-rose/25 border border-lumiere-gold/45 p-6 sm:p-10 lg:p-14 shadow-editorial">
            <FloralSprig className="w-28 sm:w-36 absolute -top-5 right-6 opacity-85" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Overhead Studio Box Image in Soft Rounded Frame */}
              <div className="lg:col-span-6">
                <figure className="relative">
                  <div className="overflow-hidden rounded-[2rem] border border-lumiere-gold/55 bg-lumiere-paper p-2.5 sm:p-3.5 shadow-card">
                    <div className="overflow-hidden rounded-[1.5rem] aspect-[4/3] relative">
                      <img
                        src="/images/product-topview.jpg"
                        alt="Fotografia de estúdio da caixa rígida off-white La Vie en Douceur aberta, vista de cima, mostrando claramente as seis sobremesas organizadas em divisórias individuais, detalhes dourados e fita de cetim rosa-claro"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 px-2 flex items-center justify-between text-xs text-lumiere-cocoa">
                    <span className="font-serif italic text-base text-lumiere-ink">
                      Caixa rígida off-white com divisórias individuais e laço rosa-claro
                    </span>
                    <span className="font-serif text-lg font-semibold text-lumiere-ink">
                      R$ 89,90
                    </span>
                  </figcaption>
                </figure>
              </div>

              {/* Packaging Description & Interactive Pearl Selector */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2.5">
                  <span className="font-script text-3xl text-lumiere-goldDark block">
                    L&apos;Écrin de Douceur
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-lumiere-ink leading-snug">
                    Apresentada como uma caixa de joias da confeitaria
                  </h3>
                  <p className="text-sm sm:text-base text-lumiere-cocoa leading-relaxed">
                    Os seis doces repousam em uma <strong className="text-lumiere-ink font-semibold">caixa rígida off-white</strong> com berços individuais que protegem cada acabamento, filetes em <strong className="text-lumiere-ink font-semibold">dourado champagne</strong>, <strong className="text-lumiere-ink font-semibold">laço de cetim rosa-claro</strong> e o brasão da Lumière d&apos;Amour.
                  </p>
                </div>

                {/* Interactive Tasting Selector Pills */}
                <div className="pt-3 border-t border-lumiere-gold/25">
                  <p className="text-xs uppercase tracking-[0.2em] text-lumiere-muted mb-3">
                    Toque para degustar cada criação da caixa:
                  </p>
                  <div
                    className="flex flex-wrap gap-2"
                    role="tablist"
                    aria-label="Seleção das seis sobremesas"
                  >
                    {DESSERTS.map((dessert) => {
                      const isSelected = dessert.id === selectedDessertId;
                      return (
                        <button
                          key={dessert.id}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => setSelectedDessertId(dessert.id)}
                          className={`px-4 py-2 rounded-full text-xs transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold ${
                            isSelected
                              ? 'bg-lumiere-ink text-lumiere-cream border-lumiere-gold font-bold shadow-sm'
                              : 'bg-lumiere-paper/90 text-lumiere-cocoa border-lumiere-gold/35 hover:bg-lumiere-rose/35 hover:border-lumiere-gold'
                          }`}
                        >
                          <span className="font-serif italic text-lumiere-gold mr-1.5">
                            {dessert.number}.
                          </span>
                          {dessert.name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Dessert Cameo Spotlight */}
                  <div
                    role="tabpanel"
                    className="mt-5 p-4 sm:p-5 rounded-3xl bg-lumiere-paper/95 border border-lumiere-gold/40 flex flex-col sm:flex-row gap-5 items-center shadow-sm"
                  >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-lumiere-gold/60 shrink-0 shadow-sm">
                      <img
                        src={activeDessert.image}
                        alt={activeDessert.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1.5 text-center sm:text-left">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-lumiere-goldDark font-bold block">
                        Criação {activeDessert.number} &bull; {activeDessert.frenchTechnique}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-semibold text-lumiere-ink">
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
          </div>
        </RevealOnScroll>

        {/* Part 2: Editorial Lookbook Gallery of the 6 Desserts (Alternating & Organic) */}
        <div className="space-y-16 sm:space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-14 sm:gap-y-20 items-start">
            {DESSERTS.map((dessert, index) => {
              const isArch = index % 2 === 0;
              const isStaggered = index % 2 === 1;

              return (
                <RevealOnScroll
                  key={dessert.id}
                  delay={(index % 2) * 120}
                  as="article"
                  className={`group relative flex flex-col ${
                    isStaggered ? 'md:mt-14' : ''
                  }`}
                >
                  {/* Large Editorial Dessert Portrait with Alternating Arch / Cameo Frame */}
                  <div className="relative mx-auto w-full">
                    {/* Subtle Pastel Halo */}
                    <div
                      className={`absolute -inset-2 ${
                        isArch
                          ? 'french-arch bg-lumiere-rose/30'
                          : 'rounded-[2.75rem] bg-lumiere-sage/35'
                      } blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                      aria-hidden="true"
                    />

                    <div
                      className={`relative bg-lumiere-paper p-3 sm:p-4 border border-lumiere-gold/50 shadow-editorial transition-transform duration-500 group-hover:-translate-y-1 ${
                        isArch ? 'french-arch' : 'rounded-[2.5rem]'
                      }`}
                    >
                      <div
                        className={`relative overflow-hidden aspect-[4/3] ${
                          isArch ? 'french-arch' : 'rounded-[2rem]'
                        }`}
                      >
                        <img
                          src={dessert.image}
                          alt={dessert.imageAlt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        <div
                          className={`absolute inset-2.5 border border-lumiere-cream/65 pointer-events-none ${
                            isArch ? 'french-arch' : 'rounded-[1.6rem]'
                          }`}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Floating Pearl Number Medallion */}
                      <div className="absolute -bottom-4 right-6 w-12 h-12 rounded-full bg-lumiere-paper border border-lumiere-gold shadow-card flex items-center justify-center">
                        <span className="font-serif italic text-lg font-semibold text-lumiere-ink">
                          {dessert.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Poetic Editorial Caption Below Photo (Open & Airy, No Heavy Card Box) */}
                  <div className="pt-7 px-2 sm:px-4 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em]">
                      <span className="px-3 py-1 rounded-full bg-lumiere-rose/45 text-lumiere-ink font-semibold">
                        {dessert.frenchTechnique}
                      </span>
                      <span className="text-lumiere-gold">&bull;</span>
                      <span className="text-lumiere-goldDark font-semibold">
                        {dessert.brazilianTouch}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-lumiere-ink leading-snug font-normal">
                      {dessert.shortTitle}
                    </h3>

                    <p className="text-sm sm:text-base text-lumiere-cocoa leading-relaxed">
                      {dessert.description}
                    </p>

                    <p className="pt-2 border-t border-lumiere-gold/25 font-serif italic text-base text-lumiere-goldDark">
                      &ldquo;{dessert.sensoryNotes}&rdquo;
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Romantic Satin Ribbon Invitation Strip */}
        <RevealOnScroll className="mt-16 sm:mt-24">
          <div className="relative rounded-[2.5rem] bg-gradient-to-r from-lumiere-rose/55 via-lumiere-paper to-lumiere-sage/45 border border-lumiere-gold/55 p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-editorial space-y-4">
            <SatinBowAccent className="w-16 mx-auto -mt-12 mb-1" />
            <p className="font-script text-3xl text-lumiere-goldDark">
              Para presentear, compartilhar ou celebrar
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-lumiere-ink">
              Todas as seis criações reunidas em uma única experiência por{' '}
              <span className="font-semibold underline decoration-lumiere-gold/60 underline-offset-4">
                R$ 89,90
              </span>
            </h3>
            <p className="text-sm text-lumiere-cocoa max-w-xl mx-auto">
              Disponibilidade à pronta entrega em nossa boutique física, sujeita ao estoque artesanal do dia.
            </p>
            <div className="pt-2">
              <a
                href="#reserva"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToForm();
                }}
                className="btn-luxury-primary"
              >
                <Sparkles className="w-4 h-4 text-lumiere-gold" aria-hidden="true" />
                <span>Reservar minha caixa La Vie en Douceur</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <CurvedSectionDivider fill="#FBF8F3" />
    </section>
  );
}
