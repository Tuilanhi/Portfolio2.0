/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black-gray': "#1f1f1f",
      'accent-gray': "#27272a",
    },
  },
  plugins: [require("flowbite/plugin"), require("prettier-plugin-tailwindcss")],
};
