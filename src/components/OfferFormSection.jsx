import React, { useState } from 'react';
import { Check, AlertCircle, Sparkles, Info, RotateCcw } from 'lucide-react';
import { DESSERTS } from '../data/content';
import {
  RevealOnScroll,
  GoldFleuronDivider,
  FloralSprig,
  SatinBowAccent,
  CurvedSectionDivider
} from './Ornaments';

function formatWhatsApp(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function OfferFormSection({ onOpenLegalModal, formInputRef }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().split(/\s+/).length < 2) {
      nextErrors.fullName = 'Por favor, informe seu nome e sobrenome completos.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Por favor, informe um endereço de e-mail válido.';
    }

    const phoneDigits = formData.whatsapp.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      nextErrors.whatsapp = 'Por favor, informe um número de WhatsApp válido com DDD (ex.: (11) 99123-4567).';
    }

    if (!formData.consent) {
      nextErrors.consent = 'É necessário autorizar o contato e concordar com a Política de Privacidade para prosseguir.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field, value) => {
    const formattedValue = field === 'whatsapp' ? formatWhatsApp(value) : value;
    setFormData((prev) => ({ ...prev, [field]: formattedValue }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        ...formData,
        timestamp: new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit'
        })
      });
    }, 550);
  };

  const handleResetSimulation = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
      message: '',
      consent: false
    });
    setErrors({});
  };

  return (
    <section
      id="reserva"
      aria-labelledby="offer-heading"
      className="pt-12 sm:pt-20 bg-lumiere-cream relative overflow-hidden"
    >
      {/* Soft Romantic Glows */}
      <div
        className="pointer-events-none absolute top-16 -left-24 w-96 h-96 rounded-full bg-lumiere-rose/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-16 -right-24 w-96 h-96 rounded-full bg-lumiere-sage/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 relative">
        {/* Section Header */}
        <RevealOnScroll className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Convite à Degustação
          </span>
          <h2
            id="offer-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            Sua experiência La Vie en Douceur começa aqui.
          </h2>
          <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed max-w-2xl mx-auto">
            Registre seu interesse para consultar a disponibilidade à pronta entrega na boutique ou solicitar um atendimento dedicado.
          </p>
          <GoldFleuronDivider variant="floral" className="pt-1" />
        </RevealOnScroll>

        {/* Main 2-Column Offer + Wedding Invitation Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Arched Menu Degustação Summary */}
          <RevealOnScroll className="lg:col-span-5">
            <div className="french-arch bg-lumiere-paper border border-lumiere-gold/55 p-6 sm:p-9 shadow-editorial space-y-6">
              {/* Arched Box Image */}
              <div className="relative overflow-hidden french-arch aspect-[4/3] border border-lumiere-gold/40">
                <img
                  src="/images/product-topview.jpg"
                  alt="Caixa rígida off-white La Vie en Douceur aberta exibindo as seis mini sobremesas franco-brasileiras em divisórias individuais"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-lumiere-paper/95 border border-lumiere-gold px-4 py-1 text-[11px] uppercase tracking-[0.16em] font-bold text-lumiere-ink shadow-sm">
                  6 Joias Artesanais
                </span>
              </div>

              {/* Price & Title */}
              <div className="text-center border-b border-lumiere-gold/25 pb-5 space-y-1">
                <span className="font-script text-3xl text-lumiere-goldDark block">
                  Menu de Degustação
                </span>
                <h3 className="font-serif text-3xl font-semibold text-lumiere-ink">
                  La Vie en Douceur
                </h3>
                <div className="pt-2 flex items-baseline justify-center gap-2">
                  <span className="text-xs uppercase tracking-[0.18em] text-lumiere-muted">
                    Caixa com 6 unidades:
                  </span>
                  <span className="font-serif text-4xl font-semibold text-lumiere-ink">
                    R$ 89,90
                  </span>
                </div>
              </div>

              {/* Delicate Menu List */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] text-lumiere-goldDark font-bold block text-center">
                  Seleção inclusa na caixa
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-lumiere-cocoa">
                  {DESSERTS.map((d) => (
                    <li key={d.id} className="flex items-start gap-2.5">
                      <span className="text-lumiere-gold text-xs mt-0.5" aria-hidden="true">
                        &#10022;
                      </span>
                      <span>{d.shortTitle}.</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gift Packaging Pill Note */}
              <div className="rounded-3xl bg-lumiere-rose/35 border border-lumiere-gold/40 p-4 text-center text-xs text-lumiere-cocoa space-y-1">
                <p className="font-serif italic text-base text-lumiere-ink font-semibold">
                  Acabamento pronto para presentear
                </p>
                <p className="leading-relaxed">
                  Caixa rígida off-white com divisórias individuais, detalhes dourados e laço de cetim rosa-claro. Disponibilidade à pronta entrega sujeita ao estoque da loja.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Wedding Invitation Styled Form */}
          <RevealOnScroll delay={130} className="lg:col-span-7 relative">
            <FloralSprig className="w-28 sm:w-36 absolute -top-5 -right-3 z-20 opacity-90" />
            <FloralSprig flip className="w-28 sm:w-36 absolute -bottom-5 -left-3 z-20 opacity-90" />

            <div className="invitation-card p-7 sm:p-11 lg:p-14">
              {!submittedData ? (
                <form onSubmit={handleSubmit} noValidate className="relative z-10 space-y-6">
                  {/* Wedding Invitation Crest & Header */}
                  <div className="text-center space-y-2 pb-5 border-b border-lumiere-gold/25">
                    <img
                      src="/images/logo-crest.png"
                      alt=""
                      aria-hidden="true"
                      className="h-14 w-auto mx-auto object-contain opacity-90"
                    />
                    <span className="font-script text-3xl text-lumiere-goldDark block">
                      Répondez S&apos;il Vous Plaît
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-lumiere-ink">
                      Reserve sua caixa La Vie en Douceur
                    </h3>
                    <p className="text-xs sm:text-sm text-lumiere-cocoa">
                      Campos sinalizados com <span className="text-lumiere-goldDark font-bold">*</span> são obrigatórios.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs uppercase tracking-[0.18em] font-bold text-lumiere-ink mb-2"
                    >
                      Nome completo <span className="text-lumiere-goldDark">*</span>
                    </label>
                    <input
                      ref={formInputRef}
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Ex.: Helena Albuquerque"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                      className={`w-full px-5 py-3.5 rounded-2xl bg-lumiere-cream/90 border text-sm text-lumiere-ink placeholder:text-lumiere-muted/60 focus:outline-none focus:ring-2 focus:ring-lumiere-gold transition-all ${
                        errors.fullName ? 'border-red-700 bg-lumiere-rose/30' : 'border-lumiere-gold/45 hover:border-lumiere-gold'
                      }`}
                    />
                    {errors.fullName && (
                      <p
                        id="error-fullName"
                        role="alert"
                        className="mt-1.5 text-xs text-red-800 flex items-center gap-1.5 pl-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & WhatsApp Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-[0.18em] font-bold text-lumiere-ink mb-2"
                      >
                        E-mail <span className="text-lumiere-goldDark">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="seuemail@exemplo.com.br"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        className={`w-full px-5 py-3.5 rounded-2xl bg-lumiere-cream/90 border text-sm text-lumiere-ink placeholder:text-lumiere-muted/60 focus:outline-none focus:ring-2 focus:ring-lumiere-gold transition-all ${
                          errors.email ? 'border-red-700 bg-lumiere-rose/30' : 'border-lumiere-gold/45 hover:border-lumiere-gold'
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="error-email"
                          role="alert"
                          className="mt-1.5 text-xs text-red-800 flex items-center gap-1.5 pl-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="whatsapp"
                        className="block text-xs uppercase tracking-[0.18em] font-bold text-lumiere-ink mb-2"
                      >
                        WhatsApp <span className="text-lumiere-goldDark">*</span>
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => handleChange('whatsapp', e.target.value)}
                        placeholder="(11) 99123-4567"
                        aria-invalid={Boolean(errors.whatsapp)}
                        aria-describedby={errors.whatsapp ? 'error-whatsapp' : undefined}
                        className={`w-full px-5 py-3.5 rounded-2xl bg-lumiere-cream/90 border text-sm text-lumiere-ink placeholder:text-lumiere-muted/60 focus:outline-none focus:ring-2 focus:ring-lumiere-gold transition-all ${
                          errors.whatsapp ? 'border-red-700 bg-lumiere-rose/30' : 'border-lumiere-gold/45 hover:border-lumiere-gold'
                        }`}
                      />
                      {errors.whatsapp && (
                        <p
                          id="error-whatsapp"
                          role="alert"
                          className="mt-1.5 text-xs text-red-800 flex items-center gap-1.5 pl-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.whatsapp}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-[0.18em] font-bold text-lumiere-ink mb-2"
                    >
                      Mensagem ou dedicatória{' '}
                      <span className="text-lumiere-muted font-normal lowercase">(opcional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Conte-nos se a caixa é para presente, se deseja consultar alergênicos ou sua preferência entre retirada e consumo na boutique..."
                      className="w-full px-5 py-3.5 rounded-2xl bg-lumiere-cream/90 border border-lumiere-gold/45 hover:border-lumiere-gold text-sm text-lumiere-ink placeholder:text-lumiere-muted/60 focus:outline-none focus:ring-2 focus:ring-lumiere-gold transition-all"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <div className="flex items-start gap-3">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => handleChange('consent', e.target.checked)}
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? 'error-consent' : undefined}
                        className="mt-1 w-4 h-4 rounded accent-lumiere-ink border-lumiere-gold focus:ring-2 focus:ring-lumiere-gold cursor-pointer"
                      />
                      <label htmlFor="consent" className="text-xs sm:text-sm text-lumiere-cocoa leading-relaxed cursor-pointer">
                        Concordo em receber contato da <strong className="text-lumiere-ink">Lumière d&apos;Amour</strong> por WhatsApp ou e-mail para atendimento sobre a caixa <em>La Vie en Douceur</em> e declaro ter lido a{' '}
                        <button
                          type="button"
                          onClick={() => onOpenLegalModal('privacy')}
                          className="underline text-lumiere-ink font-semibold hover:text-lumiere-goldDark focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold"
                        >
                          Política de Privacidade
                        </button>
                        . <span className="text-lumiere-goldDark font-bold">*</span>
                      </label>
                    </div>
                    {errors.consent && (
                      <p
                        id="error-consent"
                        role="alert"
                        className="mt-2 text-xs text-red-800 flex items-center gap-1.5 pl-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Primary Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-luxury-primary w-full disabled:opacity-60"
                    >
                      <Sparkles className="w-4 h-4 text-lumiere-gold" aria-hidden="true" />
                      <span>{isSubmitting ? 'Processando simulação...' : 'Quero reservar minha caixa'}</span>
                    </button>
                  </div>

                  {/* Academic Transparency Note */}
                  <div className="p-4 rounded-2xl bg-lumiere-cream/85 border border-lumiere-gold/30 flex items-start gap-2.5 text-xs text-lumiere-muted">
                    <Info className="w-4 h-4 text-lumiere-goldDark shrink-0 mt-0.5" aria-hidden="true" />
                    <p>
                      <strong>Demonstração acadêmica:</strong> este formulário simula a jornada de interesse do visitante. Nenhum pedido comercial real ou cobrança financeira será efetuado.
                    </p>
                  </div>
                </form>
              ) : (
                /* Academic Simulation Confirmation View */
                <div
                  role="status"
                  aria-live="polite"
                  className="relative z-10 p-4 sm:p-6 space-y-6 text-center"
                >
                  <SatinBowAccent className="w-16 mx-auto" />

                  <div className="space-y-2">
                    <div className="w-14 h-14 rounded-full bg-lumiere-sage/60 border border-lumiere-gold flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 text-lumiere-ink" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-lumiere-goldDark font-bold block">
                      Simulação de Envio Concluída ({submittedData.timestamp})
                    </span>
                    <h3 className="font-serif text-3xl text-lumiere-ink font-semibold">
                      Obrigado pelo seu interesse, {submittedData.fullName.split(' ')[0]}!
                    </h3>
                  </div>

                  <div className="p-5 rounded-3xl bg-lumiere-rose/45 border border-lumiere-gold/50 space-y-2 text-sm text-lumiere-ink text-left">
                    <p className="font-bold uppercase tracking-[0.14em] text-xs flex items-center gap-2">
                      <Info className="w-4 h-4 text-lumiere-goldDark shrink-0" aria-hidden="true" />
                      <span>Aviso Importante — Fluxo de Simulação Acadêmica</span>
                    </p>
                    <p className="leading-relaxed text-lumiere-cocoa">
                      Esta página integra um <strong className="text-lumiere-ink">projeto acadêmico demonstrativo</strong> da marca conceitual Lumière d&apos;Amour. <strong className="text-lumiere-ink">Nenhum pedido real foi concluído, nenhuma reserva de estoque foi efetivada e nenhum pagamento foi processado.</strong>
                    </p>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-lumiere-cocoa bg-lumiere-cream/90 p-5 rounded-3xl border border-lumiere-gold/35 text-left">
                    <p className="uppercase tracking-[0.18em] text-[11px] text-lumiere-goldDark font-bold mb-2">
                      Resumo dos dados validados na demonstração:
                    </p>
                    <p>
                      <strong className="text-lumiere-ink">Produto selecionado:</strong> Caixa La Vie en Douceur (6 unidades — R$ 89,90 fictício)
                    </p>
                    <p>
                      <strong className="text-lumiere-ink">Nome:</strong> {submittedData.fullName}
                    </p>
                    <p>
                      <strong className="text-lumiere-ink">E-mail:</strong> {submittedData.email}
                    </p>
                    <p>
                      <strong className="text-lumiere-ink">WhatsApp:</strong> {submittedData.whatsapp}
                    </p>
                    {submittedData.message && (
                      <p>
                        <strong className="text-lumiere-ink">Mensagem:</strong> {submittedData.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleResetSimulation}
                    className="btn-luxury-outline w-full"
                  >
                    <RotateCcw className="w-4 h-4 text-lumiere-goldDark" aria-hidden="true" />
                    <span>Realizar nova simulação no formulário</span>
                  </button>
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <CurvedSectionDivider fill="#FBF8F3" />
    </section>
  );
}
