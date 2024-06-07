/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slow-ping": "pulse 1.4s ease-in infinite",
      },
    },
  },
  plugins: [],
};
