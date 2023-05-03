/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#04207a",

          "secondary": "#8dfcb0",

          "accent": "#d5b9f7",

          "neutral": "#1D1B22",

          "base-100": "#E7E4F1",

          "info": "#9BAFDF",

          "success": "#37D78A",

          "warning": "#AD7505",

          "error": "#DF3459",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

