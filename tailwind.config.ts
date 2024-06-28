import type { Config } from 'tailwindcss'

const baseColors = {
  primary: '#1e40af',
  info: '#0ea5e9',
  success: '#059669',
  warning: '#fbbf24',
  error: '#ef4444',
  normal: '#1f2937'
}

const textColor = {
  normal: '#1f2937'
}

const baseFontSize = {
  overline: '0.75rem',
  caption: '0.875rem',
  subtitle: '1.125rem',
  title: '1.25rem',
  'header-3': '1.5rem',
  'header-2': '1.875rem',
  'header-1': '2.25rem'
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        ...baseFontSize
      },
      textColor: {
        ...baseColors,
        ...textColor
      },
      backgroundColor: {
        ...baseColors
      },
      borderColor: {
        ...baseColors
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1320px',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.text-soft': {
          opacity: '0.6'
        },
        '.text-disable': {
          opacity: '0.3'
        }
      })
    }
  ]
}
export default config
