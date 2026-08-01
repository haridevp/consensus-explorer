/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070a10',
          900: '#0a0e14',
          850: '#0d121a',
          800: '#12161f',
          700: '#1a2029',
          600: '#242b37',
          500: '#333c4b',
        },
        mist: {
          400: '#7c8699',
          300: '#a3acbc',
          100: '#e7ecf3',
        },
        signal: {
          cyan: '#4ce0d2',
          cyanDim: '#2b8f86',
          violet: '#7c6ff0',
          violetDim: '#4d46a6',
          amber: '#f0b155',
          red: '#f0556c',
          green: '#5fd67a',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(76,224,210,0.15), 0 0 24px rgba(76,224,210,0.08)',
        glowViolet: '0 0 0 1px rgba(124,111,240,0.15), 0 0 24px rgba(124,111,240,0.1)',
        panel: '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at 20% 0%, rgba(76,224,210,0.10), transparent 45%), radial-gradient(circle at 85% 20%, rgba(124,111,240,0.10), transparent 40%)',
      },
      animation: {
        pulseSlow: 'pulseSlow 3.5s ease-in-out infinite',
        drift: 'drift 18s linear infinite',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 1 },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(-40px,-30px)' },
        },
      },
    },
  },
  plugins: [],
};
