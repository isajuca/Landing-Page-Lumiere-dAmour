import React, { useState } from 'react';
import { Check, AlertCircle, Sparkles, Info, RotateCcw } from 'lucide-react';
import { DESSERTS } from '../data/content';

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
      className="py-16 sm:py-24 bg-lumiere-cream border-b border-lumiere-gold/25 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-lumiere-goldDark font-semibold">
            Atendimento &amp; Disponibilidade
          </span>
          <h2
            id="offer-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lumiere-ink leading-tight font-normal"
          >
            Sua experiência La Vie en Douceur começa aqui.
          </h2>
          <p className="text-base sm:text-lg text-lumiere-cocoa leading-relaxed font-light">
            Manifeste seu interesse abaixo para consultar o estoque à pronta entrega do dia em nossa boutique ou solicitar atendimento personalizado.
          </p>
          <div className="w-20 h-px bg-lumiere-gold mx-auto" aria-hidden="true" />
        </div>

        {/* Main 2-Column Offer + Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Product Offer Recap */}
          <div className="lg:col-span-5 bg-lumiere-paper border border-lumiere-gold/45 p-6 sm:p-8 shadow-editorial space-y-6">
            <div className="relative overflow-hidden aspect-[4/3] border border-lumiere-gold/35">
              <img
                src="/images/product-topview.jpg"
                alt="Caixa rígida off-white La Vie en Douceur aberta exibindo as seis mini sobremesas franco-brasileiras em divisórias individuais"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 right-3 bg-lumiere-cream/95 border border-lumiere-gold px-3 py-1 text-xs uppercase tracking-[0.16em] font-bold text-lumiere-ink">
                6 Unidades Artesanais
              </span>
            </div>

            <div className="flex items-baseline justify-between border-b border-lumiere-gold/25 pb-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-lumiere-muted block">
                  Seleção Completa
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-lumiere-ink">
                  La Vie en Douceur
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] uppercase tracking-[0.18em] text-lumiere-muted block">
                  Caixa com 6 doces
                </span>
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-lumiere-ink">
                  R$ 89,90
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              <span className="text-xs uppercase tracking-[0.18em] text-lumiere-goldDark font-bold block">
                O que acompanha a sua caixa:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-lumiere-cocoa">
                {DESSERTS.map((d) => (
                  <li key={d.id} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-lumiere-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{d.shortTitle}.</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-lumiere-sage/35 border border-lumiere-gold/35 text-xs text-lumiere-ink space-y-1">
              <p className="font-semibold uppercase tracking-[0.15em]">
                Embalagem Presenteável Inclusa
              </p>
              <p className="text-lumiere-cocoa leading-relaxed">
                Caixa rígida off-white com divisórias individuais, detalhes dourados e laço de cetim rosa-claro. Disponibilidade à pronta entrega sujeita ao estoque da loja.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form or Academic Simulation Feedback */}
          <div className="lg:col-span-7 bg-lumiere-paper border border-lumiere-gold/50 p-6 sm:p-10 shadow-editorial">
            {!submittedData ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-lumiere-gold/25 pb-4">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-lumiere-goldDark font-bold">
                    Formulário de Interesse
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-lumiere-ink mt-1">
                    Preencha seus dados para atendimento
                  </h3>
                  <p className="text-xs sm:text-sm text-lumiere-cocoa mt-1">
                    Campos marcados com <span className="text-lumiere-goldDark font-bold">*</span> são de preenchimento obrigatório.
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
                    className={`w-full px-4 py-3.5 bg-lumiere-cream border text-sm text-lumiere-ink placeholder:text-lumiere-muted/60 focus:outline-none focus:ring-2 focus:ring-lumiere-gold transition-colors ${
                      errors.fullName ? 'border-red-700 bg-lumiere-rose/25' : 'border-lumiere-gold/45'
                    }`}
                  />
                  {errors.fullName && (
                    <p
                      id="error-fullName"
                      role="alert"
                      className="mt-1.5 text-xs text-red-800 flex items-center gap-1.5"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email & WhatsApp Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className={`w-full px-4 py-3.5 bg-lumiere-cream border text-sm text-lumiere-ink placeholder:text-lumiere-muted/60 focus:outline-none focus:ring-2 focus:ring-lumiere-gold transition-colors ${
                        errors.email ? 'border-red-700 bg-lumiere-rose/25' : 'border-lumiere-gold/45'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="error-email"
                        role="alert"
                        className="mt-1.5 text-xs text-red-800 flex items-center gap-1.5"
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
                      className={`w-full px-4 py-3.5 bg-lumiere-cream border text-sm text-lumiere-ink placeholder:text-lumiere-muted/60 focus:outline-none focus:ring-2 focus:ring-lumiere-gold transition-colors ${
                        errors.whatsapp ? 'border-red-700 bg-lumiere-rose/25' : 'border-lumiere-gold/45'
                      }`}
                    />
                    {errors.whatsapp && (
                      <p
                        id="error-whatsapp"
                        role="alert"
                        className="mt-1.5 text-xs text-red-800 flex items-center gap-1.5"
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
                    Mensagem <span className="text-lumiere-muted font-normal lowercase">(opcional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Conte-nos se a caixa é para presente, se deseja consultar alergênicos ou sua preferência entre retirada e consumo na boutique..."
                    className="w-full px-4 py-3 bg-lumiere-cream border border-lumiere-gold/45 text-sm text-lumiere-ink placeholder:text-lumiere-muted/60 focus:outline-none focus:ring-2 focus:ring-lumiere-gold transition-colors"
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
                      className="mt-1 w-4 h-4 accent-lumiere-ink border-lumiere-gold focus:ring-2 focus:ring-lumiere-gold cursor-pointer"
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
                      className="mt-2 text-xs text-red-800 flex items-center gap-1.5"
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
                <div className="p-3.5 bg-lumiere-cream border border-lumiere-gold/30 flex items-start gap-2.5 text-xs text-lumiere-muted">
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
                className="p-6 sm:p-8 bg-lumiere-cream border border-lumiere-gold space-y-6"
              >
                <div className="flex items-center gap-3 text-lumiere-ink">
                  <div className="w-11 h-11 rounded-full bg-lumiere-sage/60 border border-lumiere-gold flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-lumiere-ink" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-lumiere-goldDark font-bold block">
                      Simulação de Envio Concluída ({submittedData.timestamp})
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-lumiere-ink font-semibold">
                      Obrigado pelo seu interesse, {submittedData.fullName.split(' ')[0]}!
                    </h3>
                  </div>
                </div>

                <div className="p-5 bg-lumiere-rose/40 border border-lumiere-gold/50 space-y-2 text-sm text-lumiere-ink">
                  <p className="font-bold uppercase tracking-[0.14em] text-xs flex items-center gap-2">
                    <Info className="w-4 h-4 text-lumiere-goldDark shrink-0" aria-hidden="true" />
                    <span>Aviso Importante — Fluxo de Simulação Acadêmica</span>
                  </p>
                  <p className="leading-relaxed text-lumiere-cocoa">
                    Esta página integra um <strong className="text-lumiere-ink">projeto acadêmico demonstrativo</strong> da marca conceitual Lumière d&apos;Amour. <strong className="text-lumiere-ink">Nenhum pedido real foi concluído, nenhuma reserva de estoque foi efetivada e nenhum pagamento foi processado.</strong>
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-lumiere-cocoa bg-lumiere-paper p-5 border border-lumiere-gold/30">
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
        </div>
      </div>
    </section>
  );
}
