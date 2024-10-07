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
      },
      fontFamily: {
        phudu:
          "url('https://fonts.googleapis.com/css2?family=Phudu:wght@300..900&display=swap')",
      },
    },
  },
  plugins: [],
};
