import React from 'react';
import { Feather, HeartHandshake, Palette, Sparkles } from 'lucide-react';

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
      className="py-16 sm:py-24 bg-lumiere-cream border-b border-lumiere-gold/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Savoir-Faire &amp; Inspiração
          </span>
          <h2
            id="credibility-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            A delicadeza está em cada detalhe.
          </h2>
          <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed font-light">
            Na <strong className="font-semibold text-lumiere-ink">Lumière d&apos;Amour</strong>, acreditamos que um doce fino é um gesto de amor materializado em açúcar, textura e perfume.
          </p>
          <div className="w-20 h-px bg-lumiere-gold mx-auto" aria-hidden="true" />
        </div>

        {/* Two-Column Editorial Visual + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Dual Editorial Photo Composition (Chef + Macro Details) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Photo: Pastry Chef Working */}
            <figure className="bg-lumiere-paper p-3 sm:p-4 border border-lumiere-gold/45 shadow-editorial">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src="/images/pastry-chef.jpg"
                  alt="Confeiteira profissional da Lumière d'Amour preparando delicadamente os doces em cozinha sofisticada, vestindo uniforme off-white com detalhes rosa-claro e dourado"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <figcaption className="mt-2.5 flex items-center justify-between text-xs text-lumiere-cocoa">
                <span className="font-serif italic text-sm text-lumiere-ink">
                  Finalização manual no atelier Lumière d&apos;Amour
                </span>
                <span className="uppercase tracking-[0.16em] text-[10px] text-lumiere-goldDark font-semibold">
                  Cuidado Artesanal
                </span>
              </figcaption>
            </figure>

            {/* Secondary Photo: Macro Close-up of Textures */}
            <figure className="bg-lumiere-paper p-3 sm:p-4 border border-lumiere-gold/45 shadow-card">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-7 relative overflow-hidden aspect-[16/10]">
                  <img
                    src="/images/details-closeup.jpg"
                    alt="Close-up das texturas dos doces destacando o brilho espelhado do chocolate, a delicadeza do macaron rosa e o acabamento da tartelette de frutas vermelhas"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="sm:col-span-5 space-y-2 px-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-lumiere-goldDark font-bold block">
                    Texturas em Close-up
                  </span>
                  <p className="font-serif text-lg text-lumiere-ink leading-snug">
                    Brilho espelhado, cremosidade aveludada e frutas frescas selecionadas.
                  </p>
                  <p className="text-xs text-lumiere-cocoa leading-relaxed">
                    Cada unidade recebe atenção individual para manter o padrão visual e sensorial da nossa vitrine.
                  </p>
                </figcaption>
              </div>
            </figure>
          </div>

          {/* Right: 4 Craftsmanship Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-lumiere-paper border border-lumiere-gold/40 p-6 sm:p-8 space-y-6 shadow-card">
              <div className="space-y-2 border-b border-lumiere-gold/25 pb-5">
                <span className="font-script text-2xl sm:text-3xl text-lumiere-goldDark block">
                  Detalhes refinados para celebrar o amor.
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-lumiere-ink">
                  A arte da confeitaria fina pensada para o seu presente
                </h3>
              </div>

              <div className="space-y-6">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-lumiere-rose/45 border border-lumiere-gold/45 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-lumiere-ink" aria-hidden="true" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-xl font-semibold text-lumiere-ink">
                          {pillar.title}
                        </h4>
                        <p className="text-sm text-lumiere-cocoa leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
