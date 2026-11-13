import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PainSituationSection from './components/PainSituationSection';
import ProductShowcaseSection from './components/ProductShowcaseSection';
import BenefitsSection from './components/BenefitsSection';
import CredibilitySection from './components/CredibilitySection';
import CustomerExperienceSection from './components/CustomerExperienceSection';
import OfferFormSection from './components/OfferFormSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

export default function App() {
  const [legalModalType, setLegalModalType] = useState(null);
  const formInputRef = useRef(null);

  const handleNavigateToForm = () => {
    const formSection = document.getElementById('reserva');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        if (formInputRef.current) {
          formInputRef.current.focus({ preventScroll: true });
        }
      }, 650);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-lumiere-cream text-lumiere-ink">
      {/* Skip to content link for keyboard accessibility */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-lumiere-ink focus:text-lumiere-cream focus:border focus:border-lumiere-gold"
      >
        Pular para o conteúdo principal
      </a>

      {/* Header / Anchor Navigation */}
      <Navbar onNavigateToForm={handleNavigateToForm} />

      {/* Main 9 Mandatory Sections in Exact Order */}
      <main id="conteudo-principal" className="flex-grow">
        {/* Seção 1 — Hero */}
        <HeroSection onNavigateToForm={handleNavigateToForm} />

        {/* Seção 2 — Dor / Situação */}
        <PainSituationSection />

        {/* Seção 3 — Apresentação do produto */}
        <ProductShowcaseSection onNavigateToForm={handleNavigateToForm} />

        {/* Seção 4 — Benefícios */}
        <BenefitsSection />

        {/* Seção 5 — Diferenciais e credibilidade */}
        <CredibilitySection />

        {/* Seção 6 — Experiência do cliente */}
        <CustomerExperienceSection />

        {/* Seção 7 — Oferta e formulário obrigatório */}
        <OfferFormSection
          onOpenLegalModal={setLegalModalType}
          formInputRef={formInputRef}
        />

        {/* Seção 8 — Perguntas frequentes (FAQ) */}
        <FaqSection />

        {/* Seção 9 — Chamada final */}
        <FinalCtaSection onNavigateToForm={handleNavigateToForm} />
      </main>

      {/* 6. Rodapé */}
      <Footer onOpenLegalModal={setLegalModalType} />

      {/* Legal Modals (Política de Privacidade & Termos de Uso) */}
      <LegalModal
        modalType={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
