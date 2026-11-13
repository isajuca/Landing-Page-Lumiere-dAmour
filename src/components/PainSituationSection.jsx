import React from 'react';
import { Clock, Sparkles } from 'lucide-react';
import {
  RevealOnScroll,
  GoldFleuronDivider,
  FloralSprig,
  CurvedSectionDivider
} from './Ornaments';

export default function PainSituationSection() {
  return (
    <section
      id="situacao"
      aria-labelledby="pain-heading"
      className="pt-12 sm:pt-20 bg-lumiere-paper relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        {/* Section Editorial Heading */}
        <RevealOnScroll className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Do Altar para o Seu Cotidiano
          </span>
          <h2
            id="pain-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            Por que esperar uma ocasião especial para saborear algo extraordinário?
          </h2>
          <GoldFleuronDivider variant="floral" className="pt-1" />
        </RevealOnScroll>

        {/* Asymmetric Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Arched Boutique Photograph + Floating Parchment Note */}
          <RevealOnScroll className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none px-3 sm:px-5">
              <FloralSprig className="w-28 absolute -top-5 -left-2 z-20 opacity-85" />

              {/* Arched Window Frame */}
              <figure className="relative french-arch bg-lumiere-cream p-3 sm:p-4 border border-lumiere-gold/55 shadow-editorial">
                <div className="relative overflow-hidden french-arch aspect-[4/5]">
                  <img
                    src="/images/boutique-interior.jpg"
                    alt="Interior da boutique física Lumière d'Amour, confeitaria de esquina de inspiração parisiense com vitrines iluminadas, paredes off-white, detalhes dourados, flores rosa-claro e marcenaria verde-sálvia"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div
                    className="absolute inset-2.5 french-arch border border-lumiere-cream/70 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
                <figcaption className="mt-3 text-center">
                  <span className="font-script text-2xl text-lumiere-goldDark block leading-none">
                    Notre Boutique
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-lumiere-cocoa">
                    Confeitaria de esquina &bull; Inspiração Parisiense
                  </span>
                </figcaption>
              </figure>

              {/* Overlapping Soft Cameo Badge */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-3 z-20 bg-lumiere-rose/85 backdrop-blur-sm border border-lumiere-gold/60 rounded-3xl px-5 py-3.5 shadow-card max-w-xs mx-auto">
                <p className="font-serif italic text-base text-lumiere-ink leading-snug text-center sm:text-left">
                  &ldquo;Vitrines renovadas diariamente para adoçar o seu instante.&rdquo;
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Editorial Narrative & Organic Contrast */}
          <RevealOnScroll delay={120} className="lg:col-span-7 space-y-7">
            <blockquote className="font-serif text-2xl sm:text-3xl italic text-lumiere-ink leading-relaxed border-l-2 border-lumiere-gold pl-5 sm:pl-7">
              &ldquo;Quantas vezes você desejou a delicadeza de um doce fino de casamento, mas descobriu que só poderia encomendá-lo com meses de antecedência?&rdquo;
            </blockquote>

            <div className="space-y-4 text-base sm:text-[17px] text-lumiere-cocoa leading-relaxed">
              <p>
                Tradicionalmente, a alta confeitaria de celebrações permanece inacessível no dia a dia. Na maioria dos ateliês de eventos, degustar um entremet espelhado, uma tartelette de frutas frescas ou um bombom autoral exige listas de espera, agendamentos prévios e encomendas mínimas de dezenas de unidades.
              </p>
              <p>
                A <strong className="font-semibold text-lumiere-ink">Lumière d&apos;Amour</strong> nasceu para transformar essa experiência. Além de assinar mesas de doces inesquecíveis para casamentos, abrimos as portas da nossa boutique física com criações sofisticadas <strong className="font-semibold text-lumiere-ink">disponíveis à pronta entrega</strong> — permitindo que uma tarde tranquila, um presente espontâneo ou uma pequena celebração tenham o mesmo encanto das grandes cerimônias.
              </p>
            </div>

            {/* Organic Two-Column Comparison (Flowing Curves instead of Rigid Boxes) */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative">
              <div className="rounded-3xl bg-lumiere-cream/85 border border-lumiere-gold/30 p-6 space-y-2.5">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-lumiere-muted font-bold">
                  <Clock className="w-4 h-4 text-lumiere-goldDark" aria-hidden="true" />
                  <span>O Modelo de Encomendas</span>
                </div>
                <p className="font-serif text-xl text-lumiere-ink font-semibold">
                  Restrito às grandes datas
                </p>
                <p className="text-sm text-lumiere-cocoa leading-relaxed">
                  Exige antecedência, contratos de eventos e grandes quantidades mínimas, deixando os sabores que você ama distantes da rotina.
                </p>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-lumiere-sage/45 via-lumiere-cream to-lumiere-rose/35 border border-lumiere-gold/60 p-6 space-y-2.5 shadow-card">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-lumiere-ink font-bold">
                  <Sparkles className="w-4 h-4 text-lumiere-goldDark" aria-hidden="true" />
                  <span>O Universo Lumière d&apos;Amour</span>
                </div>
                <p className="font-serif text-xl text-lumiere-ink font-semibold">
                  A magia disponível hoje
                </p>
                <p className="text-sm text-lumiere-ink/90 leading-relaxed">
                  Seis mini sobremesas dignas de casamento reunidas em uma caixa elegante à pronta entrega na boutique, sujeita ao estoque do dia.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <CurvedSectionDivider fill="#F7F2E9" />
    </section>
  );
}
