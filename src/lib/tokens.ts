/**
 * Design tokens for Ahad Ali Khan brand system.
 * Primary colors: black, blue (#0947e4), white.
 * Prefer CSS variables from styles/globals.css in components;
 * use these tokens when JS access is required.
 */

export const colors = {
  black: '#000000',
  blue: '#0947e4',
  white: '#ffffff',
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
} as const

export const spacing = {
  sectionY: {
    mobile: '4rem',
    tablet: '5rem',
    desktop: '7rem',
  },
  containerX: {
    mobile: '1.25rem',
    tablet: '2rem',
    desktop: '2.5rem',
  },
  maxWidth: '72rem',
} as const

export const radii = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
} as const

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 12px -2px rgb(0 0 0 / 0.08)',
  lg: '0 12px 32px -8px rgb(0 0 0 / 0.12)',
} as const

export const glows = {
  blueSoft: '0 0 60px 0 rgb(9 71 228 / 0.5)',
  blueMedium: '0 0 80px 0 rgb(9 71 228 / 0.6)',
  blueStrong: '0 0 100px 20px rgb(9 71 228 / 0.7)',
  blueCorner: 'radial-gradient(ellipse at corner, rgb(9 71 228 / 0.55), transparent 70%)',
} as const

export const typography = {
  fontFamily: {
    sans: '"Manrope", system-ui, sans-serif',
  },
  fontSize: {
    body: { mobile: '1rem', desktop: '1.125rem' },
    h1: { mobile: '2.5rem', tablet: '3.5rem', desktop: '4.5rem' },
    h2: { mobile: '2rem', tablet: '2.75rem', desktop: '3.5rem' },
    h3: { mobile: '1.25rem', desktop: '1.75rem' },
  },
  lineHeight: {
    tight: '1.05',
    snug: '1.2',
    normal: '1.6',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const
