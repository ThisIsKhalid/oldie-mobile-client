/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#006d77",
          secondary: "#2a9d8f",
          warning: "#e9c46a",
          accent: "#f4a261",
          error: "#e76f51",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
