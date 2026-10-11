/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinematic: {
          black: "#090909",
          charcoal: "#171717",
          dark: "#121212",
          card: "#18181b",
          border: "#27272a",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F3D373",
          dark: "#AA7C11",
          hover: "#E5C158",
        },
        photoRed: {
          DEFAULT: "#E50914",
          hover: "#C10711",
          dark: "#990000",
        },
        ivory: {
          DEFAULT: "#F5F0E8",
          muted: "#D1CBC1",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cinematic: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FDE047 0%, #D4AF37 50%, #AA7C11 100%)',
        'dark-overlay': 'linear-gradient(to bottom, rgba(9, 9, 9, 0.4) 0%, rgba(9, 9, 9, 0.85) 75%, #090909 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
