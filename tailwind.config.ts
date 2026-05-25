import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary text and headings
        primary: {
          DEFAULT: '#383838',
          light: '#5E5E5E',
          muted: '#757575',
        },
        // Interactive elements
        interactive: {
          DEFAULT: '#0000EE',
          success: '#009C10',
        },
        // Backgrounds
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#EBEFF2',
          light: '#F5F5F5',
          accent: '#D4E6FF',
          success: '#CFF7D3',
        },
        // Neutral grays
        gray: {
          100: '#EBEFF2',
          200: '#F5F5F5',
          500: '#757575',
          700: '#5E5E5E',
          900: '#383838',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Alice', 'serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '56px',
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
      },
      lineHeight: {
        tight: '1.2',
        normal: 'normal',
        relaxed: '1.4',
        base: '1.2',
      },
      spacing: {
        // Section padding
        'section-sm': '80px',
        'section-md': '120px',
        'section-lg': '160px',
        'container': '24px',
        'content': '40px',
        // Gaps and margins
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '16px': '16px',
        '22px': '22px',
        '24px': '24px',
        '32px': '32px',
        '40px': '40px',
        '60px': '60px',
        '80px': '80px',
        '88px': '88px',
        '96px': '96px',
        '120px': '120px',
        '160px': '160px',
      },
      borderRadius: {
        none: '0px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '50px',
        '2xl': '500px',
        full: '99999px',
      },
      boxShadow: {
        card: '0px 0px 16px 0px rgba(0, 0, 0, 0.15)',
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1440px',
        large: '1920px',
      },
    },
  },
  plugins: [],
}

export default config
