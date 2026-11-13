import React from 'react';
import { Feather, HeartHandshake, Palette, Sparkles } from 'lucide-react';
import {
  RevealOnScroll,
  GoldFleuronDivider,
  FloralSprig,
  CurvedSectionDivider
} from './Ornaments';

export default function CredibilitySection() {
  const pillars = [
    {
      icon: Palette,
      title: 'Curadoria Harmônica de Sabores',
      description:
        'Cada caixa é concebida como uma sinfonia gustativa: a intensidade do chocolate belga e do doce de leite dialoga com o frescor vibrante da framboesa, das frutas vermelhas e do maracujá.'
    },
    {
      icon: Feather,
      title: 'Acabamento Artesanal de Precisão',
      description:
        'Glaçagens espelhadas, casquinhas de macaron delicadamente aeradas, pinturas peroladas à mão e toques sutis de folha de ouro refletem o cuidado dedicado a cada unidade.'
    },
    {
      icon: Sparkles,
      title: 'Encontro entre França e Brasil',
      description:
        'Unimos bases clássicas da confeitaria francesa — como pâte sablée, pâte à choux e entremets — aos sabores mais queridos do paladar brasileiro.'
    },
    {
      icon: HeartHandshake,
      title: 'Alta Confeitaria Acessível ao Cotidiano',
      description:
        'Nossa missão é aproximar a estética e o sabor dos doces finos de casamento da rotina de quem valoriza pequenos rituais de beleza e afeto.'
    }
  ];

  return (
    <section
      id="diferenciais"
      aria-labelledby="credibility-heading"
      className="pt-12 sm:pt-20 bg-lumiere-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        {/* Section Header */}
        <RevealOnScroll className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Savoir-Faire &amp; Inspiração
          </span>
          <h2
            id="credibility-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            A delicadeza está em cada detalhe.
          </h2>
          <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed max-w-2xl mx-auto">
            Na <strong className="font-semibold text-lumiere-ink">Lumière d&apos;Amour</strong>, acreditamos que cada doce fino é um gesto de amor esculpido em textura, aroma e memória.
          </p>
          <GoldFleuronDivider variant="floral" className="pt-1" />
        </RevealOnScroll>

        {/* Two-Column Editorial Composition: Layered Arch Photography Left + Ornate Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Layered Arch Photo of Pastry Chef + Overlapping Macro Cameo */}
          <RevealOnScroll className="lg:col-span-6 relative pb-12 sm:pb-16">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <FloralSprig className="w-32 absolute -top-6 -left-4 z-20 opacity-90" />

              {/* Soft Rose Offset Arch */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 french-arch bg-lumiere-rose/45 border border-lumiere-gold/35"
                aria-hidden="true"
              />

              {/* Main Arch Frame: Pastry Chef */}
              <figure className="relative z-10 french-arch bg-lumiere-paper p-3.5 sm:p-4 border border-lumiere-gold/55 shadow-editorial">
                <div className="relative overflow-hidden french-arch aspect-[4/5]">
                  <img
                    src="/images/pastry-chef.jpg"
                    alt="Confeiteira profissional da Lumière d'Amour preparando delicadamente os doces em cozinha sofisticada, vestindo uniforme off-white com detalhes rosa-claro e dourado"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div
                    className="absolute inset-2.5 french-arch border border-lumiere-cream/70 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
                <figcaption className="mt-3 px-2 flex items-center justify-between text-xs text-lumiere-cocoa">
                  <span className="font-serif italic text-sm text-lumiere-ink">
                    Finalização artesanal no atelier Lumière d&apos;Amour
                  </span>
                  <span className="uppercase tracking-[0.18em] text-[10px] text-lumiere-goldDark font-bold">
                    Haute Pâtisserie
                  </span>
                </figcaption>
              </figure>

              {/* Overlapping Macro Details Cameo Frame */}
              <figure className="relative sm:absolute mt-6 sm:mt-0 sm:-bottom-10 sm:-right-6 z-20 w-full sm:w-72 bg-lumiere-paper p-2.5 rounded-[2rem] border border-lumiere-gold shadow-editorial">
                <div className="overflow-hidden rounded-[1.5rem] aspect-[16/10]">
                  <img
                    src="/images/details-closeup.jpg"
                    alt="Close-up das texturas dos doces destacando o brilho espelhado do chocolate, a delicadeza do macaron rosa e o acabamento da tartelette de frutas vermelhas"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="pt-2 px-2 pb-1 text-center">
                  <span className="font-serif italic text-xs text-lumiere-ink block">
                    Brilho espelhado, frutas frescas e folha de ouro
                  </span>
                </figcaption>
              </figure>
            </div>
          </RevealOnScroll>

          {/* Right: Open Editorial Typography with Delicate Ornamental Details */}
          <RevealOnScroll delay={140} className="lg:col-span-6 space-y-8">
            <div className="space-y-2 border-b border-lumiere-gold/30 pb-6">
              <span className="font-script text-3xl sm:text-4xl text-lumiere-goldDark block">
                Detalhes refinados para celebrar o amor.
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-lumiere-ink leading-snug">
                O rigor de uma <em>maison</em> francesa unido ao afeto brasileiro
              </h3>
            </div>

            <div className="space-y-7">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="group flex items-start gap-5 pb-6 border-b border-lumiere-gold/20 last:border-b-0 last:pb-0"
                  >
                    <div className="w-11 h-11 rounded-full bg-lumiere-paper border border-lumiere-gold/55 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:bg-lumiere-rose/45 transition-colors">
                      <Icon className="w-4 h-4 text-lumiere-goldDark stroke-[1.4]" aria-hidden="true" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-serif italic text-sm text-lumiere-goldDark">
                          0{index + 1}
                        </span>
                        <span className="w-4 h-px bg-lumiere-gold/50" aria-hidden="true" />
                        <h4 className="font-serif text-xl sm:text-2xl font-semibold text-lumiere-ink">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-sm sm:text-base text-lumiere-cocoa leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <CurvedSectionDivider fill="#FBF8F3" />
    </section>
  );
}
