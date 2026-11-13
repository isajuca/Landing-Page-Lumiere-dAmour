import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { BRAND } from '../data/content';
import { GoldFleuronDivider } from './Ornaments';

export default function Footer({ onOpenLegalModal }) {
  return (
    <footer className="bg-lumiere-paper text-lumiere-ink border-t border-lumiere-gold/40 relative overflow-hidden">
      {/* Subtle Top Ornamental Ribbon */}
      <div
        className="h-1 w-full bg-gradient-to-r from-lumiere-rose via-lumiere-gold/60 to-lumiere-sage"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 sm:pt-18 sm:pb-14">
        {/* Centered Maison Crest & Official Brand Lockup */}
        <div className="flex flex-col items-center text-center space-y-4 pb-10">
          <a
            href="#topo"
            aria-label="Lumière d'Amour — Voltar ao topo"
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold rounded-2xl p-2"
          >
            <img
              src="/images/logo-transparent.png"
              alt="Logo oficial Lumière d'Amour — Pâtisserie Franco-Brésilienne pour Mariages"
              loading="lazy"
              className="h-36 sm:h-44 w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-103"
            />
          </a>

          <p className="font-script text-3xl text-lumiere-goldDark">
            &ldquo;{BRAND.slogan}&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-lumiere-cocoa max-w-md leading-relaxed">
            Confeitaria franco-brasileira especializada em doces finos para casamentos e boutique física com curadoria de doces sofisticados à pronta entrega.
          </p>

          <GoldFleuronDivider variant="floral" className="pt-2" />
        </div>

        {/* Contact & Legal Information Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-b border-lumiere-gold/25 text-center md:text-left">
          {/* Direct Contact */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h3 className="text-xs uppercase tracking-[0.22em] text-lumiere-goldDark font-bold">
              Atendimento &amp; Contato
            </h3>
            <ul className="space-y-2 text-sm text-lumiere-cocoa">
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <Mail className="w-4 h-4 text-lumiere-goldDark shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-lumiere-ink underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <Phone className="w-4 h-4 text-lumiere-goldDark shrink-0" aria-hidden="true" />
                <span>WhatsApp: {BRAND.whatsapp}</span>
              </li>
            </ul>
          </div>

          {/* Functional Legal Links & Illustrative CNPJ */}
          <div className="space-y-3 flex flex-col items-center md:items-end md:text-right">
            <h3 className="text-xs uppercase tracking-[0.22em] text-lumiere-goldDark font-bold">
              Transparência &amp; Termos
            </h3>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 text-sm text-lumiere-cocoa">
              <button
                type="button"
                onClick={() => onOpenLegalModal('privacy')}
                className="hover:text-lumiere-ink underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold"
              >
                Política de Privacidade
              </button>
              <span className="text-lumiere-gold" aria-hidden="true">&bull;</span>
              <button
                type="button"
                onClick={() => onOpenLegalModal('terms')}
                className="hover:text-lumiere-ink underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold"
              >
                Termos de Uso
              </button>
            </div>
            <p className="text-[11px] text-lumiere-muted">
              CNPJ ilustrativo: 00.000.000/0001-00 (empresa fictícia — não cadastrada)
            </p>
          </div>
        </div>

        {/* Bottom Academic Disclaimer & Copyright 2026 */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-lumiere-muted text-center sm:text-left">
          <p className="font-medium text-lumiere-cocoa">
            {BRAND.academicDisclaimer}
          </p>
          <p>
            Copyright 2026 &bull; {BRAND.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
