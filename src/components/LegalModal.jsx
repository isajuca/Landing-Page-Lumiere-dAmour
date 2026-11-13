import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { LEGAL_TEXTS } from '../data/content';

export default function LegalModal({ modalType, onClose }) {
  useEffect(() => {
    if (!modalType) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalType, onClose]);

  if (!modalType || !LEGAL_TEXTS[modalType]) return null;

  const content = LEGAL_TEXTS[modalType];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-lumiere-ink/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-lumiere-paper border border-lumiere-gold max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-editorial relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-lumiere-gold/30 pb-4 mb-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-lumiere-goldDark font-bold block">
              Lumière d&apos;Amour &bull; Documentação Institucional
            </span>
            <h2
              id="legal-modal-title"
              className="font-serif text-2xl sm:text-3xl text-lumiere-ink font-semibold mt-1"
            >
              {content.title}
            </h2>
            <p className="text-xs text-lumiere-muted mt-1">{content.updatedAt}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela"
            className="p-2 border border-lumiere-gold/40 text-lumiere-ink hover:bg-lumiere-rose/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-lumiere-gold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 text-sm text-lumiere-cocoa leading-relaxed">
          {content.sections.map((sec) => (
            <div key={sec.heading} className="space-y-1.5">
              <h3 className="font-serif text-lg font-semibold text-lumiere-ink">
                {sec.heading}
              </h3>
              <p>{sec.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-lumiere-gold/30 flex items-center justify-between gap-4">
          <span className="text-xs text-lumiere-muted">
            Projeto acadêmico demonstrativo. Produtos, preços e pedidos fictícios.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-lumiere-ink text-lumiere-cream text-xs uppercase tracking-[0.18em] font-bold border border-lumiere-gold hover:bg-lumiere-gold hover:text-lumiere-ink transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
