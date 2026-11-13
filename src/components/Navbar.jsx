import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { BRAND } from '../data/content';
import { GoldFleuronDivider } from './Ornaments';

export default function Navbar({ onNavigateToForm }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A Maison', href: '#situacao' },
    { label: 'La Vie en Douceur', href: '#colecao' },
    { label: 'Savoir-Faire', href: '#diferenciais' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Dúvidas', href: '#faq' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-lumiere-cream/95 backdrop-blur-md border-b border-lumiere-gold/30 py-2.5 shadow-card'
          : 'bg-lumiere-cream/90 backdrop-blur-sm border-b border-lumiere-gold/20 py-3.5 sm:py-4'
      }`}
    >
      {/* Top thin romantic ribbon bar on desktop */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-500 ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-8 opacity-100 pb-2.5 mb-2.5 border-b border-lumiere-gold/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between text-[11px] tracking-[0.22em] uppercase text-lumiere-cocoa">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lumiere-rose border border-lumiere-gold" />
            <span>Confeitaria Franco-Brasileira &bull; Casamentos &amp; Boutique</span>
          </span>
          <span className="font-serif italic normal-case tracking-normal text-sm text-lumiere-goldDark">
            &ldquo;{BRAND.slogan}&rdquo;
          </span>
          <span>La Vie en Douceur &bull; {BRAND.price}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Official Maison Logo Lockup — Large, Unclipped & Legible */}
        <a
          href="#topo"
          className="flex items-center gap-3 sm:gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold rounded-2xl py-0.5 shrink-0"
          aria-label="Lumière d'Amour — Pâtisserie Franco-Brésilienne — Voltar ao início"
        >
          {/* Official Wedding Cake & Rings Crest Emblem */}
          <div className="relative flex items-center justify-center shrink-0">
            <div
              className="absolute inset-0 rounded-full bg-lumiere-rose/35 blur-md scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />
            <img
              src="/images/logo-crest.png"
              alt="Símbolo oficial Lumière d'Amour com bolo de casamento, flores e alianças douradas em moldura oval"
              className="h-14 sm:h-16 lg:h-[74px] w-auto object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Official Brand Typography: LUMIÈRE in classic serif + d'Amour in calligraphy */}
          <div className="flex flex-col justify-center">
            <span className="font-serif text-xl sm:text-2xl lg:text-[26px] tracking-[0.22em] uppercase text-lumiere-ink font-semibold leading-none">
              LUMIÈRE
            </span>
            <span className="font-script text-[26px] sm:text-[32px] lg:text-[35px] text-lumiere-goldDark leading-[0.88] -mt-0.5 sm:-mt-1">
              d&apos;Amour
            </span>
            <span className="text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.24em] text-lumiere-cocoa mt-1 border-t border-lumiere-gold/30 pt-0.5">
              Pâtisserie Franco-Brésilienne
            </span>
          </div>
        </a>

        {/* Desktop Anchor Navigation with Delicate Spacing */}
        <nav aria-label="Navegação principal" className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              <a
                href={link.href}
                className="relative text-xs uppercase tracking-[0.2em] text-lumiere-cocoa hover:text-lumiere-ink transition-colors py-1.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold rounded-sm"
              >
                <span>{link.label}</span>
                <span
                  className="absolute inset-x-0 bottom-0 h-px bg-lumiere-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                  aria-hidden="true"
                />
              </a>
              {index < navLinks.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-lumiere-gold/45" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href="#reserva"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToForm();
            }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-bold bg-lumiere-ink text-lumiere-cream border border-lumiere-gold shadow-card hover:bg-lumiere-gold hover:text-lumiere-ink hover:shadow-goldGlow hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold"
          >
            <Sparkles className="w-3.5 h-3.5 text-lumiere-gold shrink-0" aria-hidden="true" />
            <span>Reservar Caixa</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
 