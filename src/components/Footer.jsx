import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { BRAND } from '../data/content';

export default function Footer({ onOpenLegalModal }) {
  return (
    <footer className="bg-lumiere-paper text-lumiere-ink border-t border-lumiere-gold/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-lumiere-gold/25 items-start">
          {/* Brand Logo, Name & Slogan */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-lumiere-gold/55 bg-lumiere-cream shrink-0">
                <img
                  src="/images/logo.jpg"
                  alt="Brasão Lumière d'Amour — Pâtisserie Franco-Brésilienne"
                  loading="lazy"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.14em] uppercase text-lumiere-ink font-semibold block leading-none">
                  Lumière <span className="font-script capitalize tracking-normal text-3xl text-lumiere-goldDark">d&apos;Amour</span>
                </span>
                <span className="text-[11px] uppercase tracking-[0.24em] text-lumiere-cocoa block mt-1">
                  Pâtisserie Franco-Brésilienne
                </span>
              </div>
            </div>

            <p className="font-serif italic text-xl text-lumiere-ink pt-1">
              &ldquo;{BRAND.slogan}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-lumiere-cocoa max-w-md leading-relaxed">
              Confeitaria franco-brasileira especializada em doces finos para casamentos e boutique física com curadoria de doces autorais à pronta entrega.
            </p>
          </div>

          {/* Direct Contact Info */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.22em] text-lumiere-goldDark font-bold">
              Atendimento
            </h3>
            <ul className="space-y-2.5 text-sm text-lumiere-cocoa">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-lumiere-goldDark shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-lumiere-ink underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-lumiere-goldDark shrink-0" aria-hidden="true" />
                <span>WhatsApp: {BRAND.whatsapp}</span>
              </li>
            </ul>
          </div>

          {/* Functional Legal Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.22em] text-lumiere-goldDark font-bold">
              Informações Legais
            </h3>
            <ul className="space-y-2 text-sm text-lumiere-cocoa">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('privacy')}
                  className="hover:text-lumiere-ink underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('terms')}
                  className="hover:text-lumiere-ink underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold"
                >
                  Termos de Uso
                </button>
              </li>
            </ul>
            <p className="text-[11px] text-lumiere-muted pt-1">
              CNPJ ilustrativo: 00.000.000/0001-00 (não cadastrado)
            </p>
          </div>
        </div>

        {/* Bottom Academic Disclaimer & Copyright 2026 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-lumiere-muted text-center sm:text-left">
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
