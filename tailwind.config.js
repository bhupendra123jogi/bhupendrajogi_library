/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#641ae6",
          "secondary": "#a21caf",
          "accent": "#6d28d9",
          "neutral": "#d1d5db",
          "base-100": "#111827",
          "info": "#0891b2",
          "success": "#36d399",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      }
    ],
  },
}
