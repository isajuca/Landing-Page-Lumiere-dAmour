import React from 'react';
import { CalendarX2, Sparkles, Store } from 'lucide-react';

export default function PainSituationSection() {
  return (
    <section
      id="situacao"
      aria-labelledby="pain-heading"
      className="py-16 sm:py-24 bg-lumiere-paper border-b border-lumiere-gold/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Do Altar para o Seu Cotidiano
          </span>
          <h2
            id="pain-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            Por que esperar uma ocasião especial para saborear algo extraordinário?
          </h2>
          <div className="w-20 h-px bg-lumiere-gold mx-auto" aria-hidden="true" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Boutique Editorial Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <figure className="relative bg-lumiere-cream p-3 sm:p-4 border border-lumiere-gold/45 shadow-editorial">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="/images/boutique-interior.jpg"
                  alt="Interior da boutique física Lumière d'Amour, confeitaria de esquina de inspiração parisiense com vitrines iluminadas, paredes off-white, detalhes dourados, flores rosa-claro e marcenaria verde-sálvia"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-2.5 border border-lumiere-cream/60 pointer-events-none" aria-hidden="true" />
              </div>
              <figcaption className="mt-3 pt-2 border-t border-lumiere-gold/25 flex items-center justify-between text-xs text-lumiere-cocoa">
                <span className="font-serif italic text-sm text-lumiere-ink">
                  Boutique Lumière d&apos;Amour — Inspiração Parisiense
                </span>
                <span className="uppercase tracking-[0.16em] text-[10px] text-lumiere-goldDark font-semibold">
                  Vitrines do Dia
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Right Column: Editorial Narrative & Contrast */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <p className="font-serif text-xl sm:text-2xl italic text-lumiere-ink leading-relaxed">
              &ldquo;Quantas vezes você sentiu o desejo de degustar a delicadeza de um doce fino de casamento, mas descobriu que só poderia encomendá-lo com meses de antecedência?&rdquo;
            </p>

            <p className="text-base text-lumiere-cocoa leading-relaxed">
              Tradicionalmente, a alta confeitaria de celebrações permanece restrita aos grandes eventos. Na maioria dos ateliês, saborear um entremet espelhado, uma tartelette fresca ou um bombom autoral exige listas de espera, degustações agendadas e pedidos mínimos de dezenas ou centenas de unidades.
            </p>

            <p className="text-base text-lumiere-cocoa leading-relaxed">
              A <strong className="font-semibold text-lumiere-ink">Lumière d&apos;Amour</strong> nasceu para transformar essa realidade. Além de criar mesas de doces memoráveis para casamentos, abrimos as portas da nossa boutique física para que a arte da <em>pâtisserie</em> franco-brasileira esteja disponível à pronta entrega — permitindo que uma terça-feira comum, um encontro a dois ou um gesto de carinho tenham o mesmo brilho das grandes celebrações.
            </p>

            {/* Editorial Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-lumiere-cream/80 border border-lumiere-gold/30 space-y-2">
                <div className="flex items-center gap-2 text-lumiere-muted">
                  <CalendarX2 className="w-4 h-4 text-lumiere-goldDark" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.18em] font-bold">
                    Confeitaria Tradicional de Eventos
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-lumiere-cocoa leading-relaxed">
                  Exige encomendas antecipadas, agendamento prévio e lotes mínimos elevados, limitando o acesso apenas a festas e cerimônias.
                </p>
              </div>

              <div className="p-5 bg-lumiere-sage/35 border border-lumiere-gold/55 space-y-2">
                <div className="flex items-center gap-2 text-lumiere-ink">
                  <Store className="w-4 h-4 text-lumiere-goldDark" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.18em] font-bold">
                    A Proposta Lumière d&apos;Amour
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-lumiere-ink leading-relaxed">
                  A mesma excelência artesanal dos casamentos em uma seleção de seis doces à pronta entrega na boutique, sujeita ao estoque diário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
