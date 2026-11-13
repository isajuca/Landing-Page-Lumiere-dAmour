import React, { useEffect, useRef, useState } from 'react';

/**
 * Lightweight IntersectionObserver wrapper for delicate fade-in & vertical lift.
 * Respects user preference for reduced motion via CSS/media query.
 */
export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div'
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-1000 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * Fine ornamental gold rule inspired by French wedding stationery
 */
export function GoldFleuronDivider({ className = '', variant = 'default' }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 select-none ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-lumiere-gold/60 to-lumiere-gold" />
      {variant === 'floral' ? (
        <svg
          width="36"
          height="16"
          viewBox="0 0 36 16"
          fill="none"
          className="text-lumiere-gold shrink-0"
        >
          <path
            d="M18 2C19.5 5.2 22.8 7.5 26 8C22.8 8.5 19.5 10.8 18 14C16.5 10.8 13.2 8.5 10 8C13.2 7.5 16.5 5.2 18 2Z"
            fill="#C5A064"
            fillOpacity="0.85"
          />
          <circle cx="5" cy="8" r="2" fill="#F4D6D4" stroke="#C5A064" strokeWidth="0.8" />
          <circle cx="31" cy="8" r="2" fill="#F4D6D4" stroke="#C5A064" strokeWidth="0.8" />
        </svg>
      ) : (
        <svg
          width="24"
          height="12"
          viewBox="0 0 24 12"
          fill="none"
          className="text-lumiere-gold shrink-0"
        >
          <path
            d="M12 1L15 6L12 11L9 6L12 1Z"
            fill="#C5A064"
            fillOpacity="0.85"
          />
          <circle cx="3" cy="6" r="1.2" fill="#C5A064" />
          <circle cx="21" cy="6" r="1.2" fill="#C5A064" />
        </svg>
      )}
      <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-lumiere-gold/60 to-lumiere-gold" />
    </div>
  );
}

/**
 * Delicate botanical sprig in blush pink (#F4D6D4), sage green (#D9DFC9), and champagne gold (#C5A064)
 */
export function FloralSprig({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 140 90"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${flip ? '-scale-x-100' : ''} ${className}`}
    >
      {/* Sage green leaves */}
      <path
        d="M18 74C38 58 68 38 118 18"
        stroke="#C5A064"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M42 54C36 42 40 30 52 26C54 38 49 48 42 54Z"
        fill="#D9DFC9"
        fillOpacity="0.85"
        stroke="#C5A064"
        strokeWidth="0.75"
      />
      <path
        d="M68 38C64 26 70 15 82 13C82 25 76 34 68 38Z"
        fill="#D9DFC9"
        fillOpacity="0.85"
        stroke="#C5A064"
        strokeWidth="0.75"
      />
      <path
        d="M55 48C66 54 78 52 86 42C75 38 63 41 55 48Z"
        fill="#D9DFC9"
        fillOpacity="0.75"
        stroke="#C5A064"
        strokeWidth="0.75"
      />
      {/* Blush pink blossoms */}
      <g>
        <circle cx="96" cy="26" r="9" fill="#F4D6D4" fillOpacity="0.9" stroke="#C5A064" strokeWidth="0.8" />
        <circle cx="96" cy="26" r="3" fill="#C5A064" fillOpacity="0.75" />
      </g>
      <g>
        <circle cx="34" cy="62" r="7" fill="#F4D6D4" fillOpacity="0.85" stroke="#C5A064" strokeWidth="0.8" />
        <circle cx="34" cy="62" r="2.2" fill="#C5A064" fillOpacity="0.75" />
      </g>
      <circle cx="118" cy="18" r="3.5" fill="#F4D6D4" stroke="#C5A064" strokeWidth="0.8" />
    </svg>
  );
}

/**
 * Satin bow ornament inspired by pâtisserie gift packaging
 */
export function SatinBowAccent({ className = '' }) {
  return (
    <svg
      viewBox="0 0 84 44"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M42 20C30 7 12 6 8 15C4 24 21 29 42 20Z"
        fill="#F4D6D4"
        stroke="#C5A064"
        strokeWidth="1"
      />
      <path
        d="M42 20C54 7 72 6 76 15C80 24 63 29 42 20Z"
        fill="#F4D6D4"
        stroke="#C5A064"
        strokeWidth="1"
      />
      <path
        d="M39 22L24 41L31 39L35 43L42 23"
        fill="#F4D6D4"
         fillOpacity="0.85"
        stroke="#C5A064"
        strokeWidth="0.9"
      />
      <path
        d="M45 22L60 41L53 39L49 43L42 23"
        fill="#F4D6D4"
        fillOpacity="0.85"
        stroke="#C5A064"
        strokeWidth="0.9"
      />
      <ellipse cx="42" cy="20" rx="4.5" ry="3.8" fill="#F7F2E9" stroke="#C5A064" strokeWidth="1.1" />
    </svg>
  );
}

/**
 * Curved organic section transition divider
 */
export function CurvedSectionDivider({ fill = '#FBF8F3', className = '', flip = false }) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${
        flip ? 'rotate-180' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 54"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-7 sm:h-11 block"
      >
        <path
          d="M0 54V24C240 4 480 -6 720 12C960 30 1200 44 1440 16V54H0Z"
          fill={fill}
        />
        <path
          d="M0 24C240 4 480 -6 720 12C960 30 1200 44 1440 16"
          stroke="#C5A064"
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
