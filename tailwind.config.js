/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'su-bg': '#292930',
        'su-dialog': '#33333c',
        'su-text': '#f5f9fff2',
        'su-toolbar': '#e2e5ec',
        'su-input': '#45454e',
      }
    },
  },
  plugins: [],
}

