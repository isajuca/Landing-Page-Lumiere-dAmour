import React from 'react';
import { ArrowDownRight, Sparkles, Check } from 'lucide-react';
import { BRAND } from '../data/content';

export default function HeroSection({ onNavigateToForm }) {
  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:py-24 border-b border-lumiere-gold/25"
    >
      {/* Subtle Decorative Accents */}
      <div
        className="pointer-events-none absolute -top-28 -left-28 w-96 h-96 rounded-full bg-lumiere-rose/35 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-lumiere-sage/35 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Copy & Conversion */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-lumiere-paper border border-lumiere-gold/40">
              <Sparkles className="w-3.5 h-3.5 text-lumiere-gold" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-lumiere-cocoa font-semibold">
                Coleção Assinatura • Pronta Entrega na Boutique
              </span>
            </div>

            <div className="space-y-4">
              <p className="font-script text-2xl sm:text-3xl text-lumiere-goldDark">
                {BRAND.slogan}
              </p>
              <h1
                id="hero-heading"
                className="font-serif text-4xl sm:text-5xl xl:text-[3.45rem] font-normal text-lumiere-ink leading-[1.12] tracking-tight"
              >
                A sofisticação dos doces de casamento, agora para todos os seus momentos.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed max-w-xl font-light">
              Conheça <strong className="font-serif italic font-semibold text-xl text-lumiere-ink">La Vie en Douceur</strong>, uma seleção exclusiva de seis doces franco-brasileiros, criada para transformar pequenos instantes em experiências inesquecíveis.
            </p>

            {/* Luxury Price & Packaging Box */}
            <div className="bg-lumiere-paper/90 border border-lumiere-gold/40 p-5 sm:p-6 shadow-card max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-lumiere-gold/25">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-lumiere-muted block">
                    Caixa de Degustação • 6 Unidades Artesanais
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-semibold text-lumiere-ink">
                    La Vie en Douceur
                  </span>
                </div>
                <div className="sm:text-right">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-lumiere-muted block">
                    Valor por caixa
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-lumiere-ink">
                    R$ 89,90
                  </span>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 text-xs sm:text-sm text-lumiere-cocoa">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-lumiere-gold shrink-0" aria-hidden="true" />
                  <span>Caixa rígida off-white com laço rosa-claro</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-lumiere-gold shrink-0" aria-hidden="true" />
                  <span>6 mini sobremesas em divisórias individuais</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-lumiere-gold shrink-0" aria-hidden="true" />
                  <span>Técnica francesa e sabores brasileiros</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-lumiere-gold shrink-0" aria-hidden="true" />
                  <span>Pronta entrega, sujeita ao estoque da loja</span>
                </li>
              </ul>
            </div>

            {/* Primary CTA Button */}
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#reserva"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToForm();
                }}
                className="btn-luxury-primary group"
              >
                <span>Quero viver essa experiência</span>
                <ArrowDownRight
                  className="w-4 h-4 text-lumiere-gold group-hover:text-lumiere-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#colecao"
                className="btn-luxury-outline text-center"
              >
                Conhecer os 6 doces
              </a>
            </div>
          </div>

          {/* Right Column: Hero Editorial Photograph */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-2xl lg:max-w-none">
              {/* Decorative Sage & Rose Offset Frame */}
              <div
                className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-lumiere-rose/45 via-lumiere-cream to-lumiere-sage/45 border border-lumiere-gold/35 -z-10"
                aria-hidden="true"
              />

              <figure className="relative bg-lumiere-paper p-2.5 sm:p-4 border border-lumiere-gold/50 shadow-editorial">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src="/images/hero-box.jpg"
                    alt="Fotografia editorial da caixa rígida off-white La Vie en Douceur aberta sobre mesa de mármore com as seis mini sobremesas franco-brasileiras, detalhes dourados, laço de cetim rosa-claro, flores delicadas e xícara de porcelana"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    fetchpriority="high"
                  />
                  <div className="absolute inset-2.5 border border-lumiere-cream/60 pointer-events-none" aria-hidden="true" />
                </div>

                <figcaption className="mt-3 pt-2.5 border-t border-lumiere-gold/25 flex flex-wrap items-center justify-between gap-2 text-xs text-lumiere-cocoa">
                  <span className="font-serif italic text-sm text-lumiere-ink">
                    Caixa La Vie en Douceur — Edição Boutique
                  </span>
                  <span className="uppercase tracking-[0.18em] text-[10px] px-2.5 py-1 bg-lumiere-sage/50 text-lumiere-ink font-semibold">
                    Disponível à pronta entrega*
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
