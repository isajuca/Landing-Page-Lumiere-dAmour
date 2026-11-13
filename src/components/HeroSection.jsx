import React from 'react';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { BRAND } from '../data/content';
import {
  RevealOnScroll,
  FloralSprig,
  SatinBowAccent,
  CurvedSectionDivider
} from './Ornaments';

export default function HeroSection({ onNavigateToForm }) {
  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16 bg-lumiere-cream"
    >
      {/* Soft Watercolor Atmospheric Glows */}
      <div
        className="pointer-events-none absolute -top-20 left-0 w-[30rem] h-[30rem] rounded-full bg-lumiere-rose/45 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-lumiere-sage/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Poetic Editorial Typography */}
          <RevealOnScroll className="lg:col-span-6 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Delicate Satin Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-lumiere-rose/45 border border-lumiere-gold/45 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-lumiere-goldDark" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-lumiere-ink font-semibold">
                Coleção Assinatura &bull; Pronta Entrega na Boutique
              </span>
            </div>

            {/* Highlighted Cursive Phrase & Grand Serif Headline */}
            <div className="space-y-3">
              <p className="font-script text-3xl sm:text-4xl text-lumiere-goldDark">
                {BRAND.slogan}
              </p>
              <h1
                id="hero-heading"
                className="font-serif text-4xl sm:text-5xl xl:text-[3.55rem] font-normal text-lumiere-ink leading-[1.1] tracking-tight"
              >
                A sofisticação dos doces de casamento,{' '}
                <span className="italic font-normal text-lumiere-goldDark">
                  agora para todos os seus momentos.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Conheça <strong className="font-serif italic font-semibold text-2xl text-lumiere-ink">La Vie en Douceur</strong>, uma seleção exclusiva de seis doces franco-brasileiros, criada para transformar pequenos instantes em experiências inesquecíveis.
            </p>

            {/* Organic Editorial Price & Availability Strip (No Rigid Box) */}
            <div className="pt-2 pb-1 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-7 py-4 px-6 rounded-3xl bg-lumiere-paper/85 border border-lumiere-gold/40 shadow-card">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs uppercase tracking-[0.2em] text-lumiere-cocoa">
                    Caixa com 6 joias:
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-lumiere-ink">
                    R$ 89,90
                  </span>
                </div>
                <span className="hidden sm:block h-8 w-px bg-lumiere-gold/35" aria-hidden="true" />
                <p className="text-xs text-lumiere-cocoa leading-snug text-center sm:text-left">
                  Embalagem rígida com laço rosa-claro <br className="hidden sm:inline" />
                  <span className="text-lumiere-goldDark font-semibold">
                    &bull; Pronta entrega conforme estoque
                  </span>
                </p>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#reserva"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToForm();
                }}
                className="btn-luxury-primary group w-full sm:w-auto"
              >
                <span>Quero viver essa experiência</span>
                <ArrowDownRight
                  className="w-4 h-4 text-lumiere-gold group-hover:text-lumiere-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#colecao"
                className="btn-luxury-outline w-full sm:w-auto text-center"
              >
                Descobrir os 6 sabores
              </a>
            </div>
          </RevealOnScroll>

          {/* Right Column: Asymmetric French Arch Frame & Floral Accents */}
          <RevealOnScroll delay={150} className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-xl lg:max-w-none pt-4 pb-6 px-2 sm:px-6">
              {/* Floating Botanical Sprigs */}
              <FloralSprig className="w-28 sm:w-36 absolute -top-2 right-2 z-20 opacity-90" />
              <FloralSprig flip className="w-28 sm:w-36 absolute -bottom-3 left-0 z-20 opacity-90" />

              {/* Offset Sage & Blush Arch Backdrop */}
              <div
                className="absolute inset-x-6 top-6 bottom-2 rounded-t-[11rem] rounded-b-[2.75rem] bg-gradient-to-b from-lumiere-rose/50 via-lumiere-paper to-lumiere-sage/55 border border-lumiere-gold/35 -rotate-1"
                aria-hidden="true"
              />

              {/* Main Curved Editorial Frame */}
              <figure className="relative z-10 bg-lumiere-paper p-3 sm:p-4 rounded-t-[10rem] sm:rounded-t-[12rem] rounded-b-[2.5rem] border border-lumiere-gold/60 shadow-editorial">
                {/* Satin Bow at Crown */}
                <SatinBowAccent className="w-16 sm:w-20 mx-auto -mt-7 mb-1 relative z-20" />

                <div className="relative overflow-hidden rounded-t-[9rem] sm:rounded-t-[11rem] rounded-b-[2rem] aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="/images/hero-box.jpg"
                    alt="Fotografia editorial da caixa rígida off-white La Vie en Douceur aberta sobre mesa de mármore com as seis mini sobremesas franco-brasileiras, detalhes dourados, laço de cetim rosa-claro, flores delicadas e xícara de porcelana"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                    fetchpriority="high"
                  />
                  {/* Inner thin golden arch hairline */}
                  <div
                    className="absolute inset-2.5 rounded-t-[8.5rem] sm:rounded-t-[10.5rem] rounded-b-[1.6rem] border border-lumiere-cream/75 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                <figcaption className="mt-3 px-3 pb-1 flex flex-wrap items-center justify-between gap-2 text-xs text-lumiere-cocoa">
                  <span className="font-serif italic text-base text-lumiere-ink">
                    Caixa La Vie en Douceur &mdash; 6 criações autorais
                  </span>
                  <span className="uppercase tracking-[0.18em] text-[10px] px-3 py-1 rounded-full bg-lumiere-sage/55 text-lumiere-ink font-semibold">
                    Edição Boutique
                  </span>
                </figcaption>
              </figure>

              {/* Floating Cameo Medallion Overlapping Bottom-Right */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-2 right-6 z-20 bg-lumiere-paper/95 backdrop-blur-sm px-5 py-3 rounded-full border border-lumiere-gold shadow-editorial">
                <span className="w-2.5 h-2.5 rounded-full bg-lumiere-rose border border-lumiere-gold" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-lumiere-goldDark font-bold">
                    Para presentear ou saborear
                  </span>
                  <span className="font-serif italic text-sm text-lumiere-ink">
                    Tradição francesa &amp; alma brasileira
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Organic Curved Divider into Section 2 */}
      <CurvedSectionDivider fill="#FBF8F3" />
    </section>
  );
}
