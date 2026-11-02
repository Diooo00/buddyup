import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // BUDDYUP Design Palette
        navy: {
          DEFAULT: '#173B63',
          50: '#EEF4FA',
          100: '#C5D6E8',
          200: '#9FBBD8',
          300: '#789FC7',
          400: '#5283B6',
          500: '#173B63',
          600: '#13325A',
          700: '#0E284F',
          800: '#0A1D3A',
          900: '#051226',
        },
        blue: {
          DEFAULT: '#3674A5',
          50: '#EBF3F9',
          100: '#C8DFEE',
          200: '#A1CAE2',
          300: '#79B4D5',
          400: '#529FC8',
          500: '#3674A5',
          600: '#2D6292',
          700: '#234F7E',
          800: '#1A3D6A',
          900: '#112B56',
        },
        lightblue: {
          DEFAULT: '#DCEEFF',
          50: '#F0F7FF',
          100: '#DCEEFF',
          200: '#B8DCFE',
          300: '#95CAFD',
          400: '#71B8FC',
          500: '#4EA6FB',
        },
        softgreen: {
          DEFAULT: '#DDF3E5',
          50: '#F4FBF6',
          100: '#DDF3E5',
          200: '#BAE7CB',
          300: '#97DBB1',
          400: '#74CF97',
          500: '#51C37D',
        },
        background: '#F7F9FC',
        foreground: '#263445',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      boxShadow: {
        card: '0 1px 4px 0 rgba(23,59,99,0.07), 0 4px 16px 0 rgba(23,59,99,0.06)',
        'card-hover': '0 4px 16px 0 rgba(23,59,99,0.12), 0 8px 32px 0 rgba(23,59,99,0.08)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
