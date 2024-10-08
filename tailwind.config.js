/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "banner-img": "url('/banner.png')",
        "background-img": "url('/background.png')",
        "event-banner-bg": "url('/event-img/event-banner.png')",
        "event-footer-bg": "url(/event-img/Footer.png)",
        "landing-footer-bg": "url(/Footer.png)",
      },
      fontFamily: {
        phudu: ["Phudu", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
