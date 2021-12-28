module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx ,env}",
    "./public/index.html",
    "./components/**/*.{js,jsx,ts,tsx , env}",
    "./pages/**/*.{js,jsx,ts,tsx ,env}",
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-nav": "#2CC8C1",
      },
      height: {
        "almost-screen": "calc(100% - 88px)",
        "f-view": "100%",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["last"],
    },
  },
  plugins: [],
};
