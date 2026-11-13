/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        lumiere: {
          cream: '#F7F2E9',      // Off-white — cor predominante
          paper: '#FBF8F3',      // Superfície off-white luminosa
          sand: '#EFE7DA',       // Off-white aquecido para seções alternadas
          rose: '#F4D6D4',       // Rosa-claro — detalhes românticos
          roseSoft: '#F9EAE9',   // Rosa-claro suave
          sage: '#D9DFC9',       // Verde-sálvia — elementos secundários
          sageSoft: '#EAEEDE',   // Verde-sálvia translúcido
          gold: '#C5A064',       // Dourado champagne — detalhes sofisticados
          goldDark: '#9E7B42',   // Dourado profundo para contraste de foco/hover
          goldLight: '#DFC79C',  // Filetes dourados delicados
          ink: '#2A221C',        // Espresso profundo para excelente legibilidade
          cocoa: '#54463C',      // Marrom-cacau para subtítulos e corpo
          muted: '#78665A'       // Texto secundário discreto
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive']
      },
      boxShadow: {
        editorial: '0 20px 50px -22px rgba(42, 34, 28, 0.09)',
        card: '0 12px 32px -16px rgba(42, 34, 28, 0.06)',
        goldGlow: '0 10px 28px -8px rgba(197, 160, 100, 0.38)'
      }
    }
  },
  plugins: []
};
