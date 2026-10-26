// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a', // slate-900
        accent: '#2dd4bf', // teal-400
        gold: '#fbbf24', // amber-400
        ink: '#05070f',
        // Allows integration with your design system variables
        primary: 'var(--color-primary, #2dd4bf)',
        background: 'var(--color-background, #0f172a)',
      },
      fontFamily: {
        // Adds a premium modern sans-serif stack
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      background:{
        bg1: URL('/public/assets/bg1.jpg')
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shine': 'shine 3.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'text-shimmer': 'text-shimmer 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(45,212,191,0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(45,212,191,0.6)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '60%, 100%': { transform: 'translateX(320%) skewX(-20deg)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      }
    },
  },
  plugins: [],
}