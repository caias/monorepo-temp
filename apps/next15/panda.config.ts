import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  cssVarRoot: ':root',
  eject: true,
  preflight: false,
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],
  globalCss: {
    '*': {
      margin: 0,
      padding: 0,
    },
  },
  patterns: {
    flex: {
      description: 'A Flex Css styles',
      defaultValues: {
        direction: 'row',
      },
      properties: {
        direction: { type: 'enum', value: ['row', 'column'] },
      },
      // disallow option style
      blocklist: [],
      transform({ direction }) {
        return {
          display: 'flex',
          flexDirection: direction,
        };
      },
    },
  },

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      fonts: {
        bold: { value: 'var(--font-bold)' },
        medium: { value: 'var(--font-medium)' },
        light: { value: 'var(--font-light)' },
      },
      colors: {
        red: { value: '#ff3244' },
        orange: { value: '#ff813a' },
        yellow: { value: '#ffd743' },
        green: { value: '#5be192' },
        blue: { value: '#09f' },
        indigo: { value: '#482ee9' },
        purple: { value: '#9f85ff' },
        pink: { value: '#ff9aef' },
      },
    },
    semanticTokens: {
      colors: {
        positive: { value: '{colors.blue}' },
        negative: { value: '{colors.red}' },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
