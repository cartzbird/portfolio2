module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      width: {
        '4/7': '57.142857%', // 4 divided by 7 is approximately 57.14%
        '2/7': '28.571429%', // 2 divided by 7 is approximately 28.57%
      },
    },
  },
  plugins: [],
};
