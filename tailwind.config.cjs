/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'theme-50': 'hsl(var(--color-theme-50))',
        'theme-100': 'hsl(var(--color-theme-100))',
        'theme-200': 'hsl(var(--color-theme-200))',
        'theme-300': 'hsl(var(--color-theme-300))',
        'theme-400': 'hsl(var(--color-theme-400))',
        'theme-500': 'hsl(var(--color-theme-500))',
        'theme-600': 'hsl(var(--color-theme-600))',
        'theme-700': 'hsl(var(--color-theme-700))',
        'theme-800': 'hsl(var(--color-theme-800))',
        'theme-900': 'hsl(var(--color-theme-900))',
      },
      backgroundImage: {
        'gradient-bkg': 'hsl(var(--bkg))',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")],
};
