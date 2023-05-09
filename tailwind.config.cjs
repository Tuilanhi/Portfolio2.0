/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        '2.5xl': '2.5rem',
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black-gray': "#1f1f1f",
      'accent-gray': "#27272a",
      'sky-blue': '#c6d8f4',
      'accent-lighter': "#f4e7d4",
    },
  },
  plugins: [require("flowbite/plugin"), require("prettier-plugin-tailwindcss")],
};
