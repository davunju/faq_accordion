/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,js,tsx,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "work": ['"Work Sans"'],
      },
      fontWeight: {
        "400": "400",
        "600": "600",
        "700": "700"
      },
      colors: {
        "darkPurple": "hsl(292, 42%, 14%)",
        "lightPink": "hsl(275, 100%, 97%)"
      },
      screens: {
        "mobile": "375px",
        "tablet": "768px",
        "laptop": "992px",
        "desktop": "1200px",
      }
    },
  },
  plugins: [],
}

