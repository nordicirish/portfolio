import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "light-mode": "0 4px 6px rgba(0, 0, 0, 0.1)", // Light mode shadow
        "dark-mode": "0 4px 6px rgba(255, 255, 255, 0.1)", // Soft light shadow
        "dark-mode-custom": "0 4px 6px rgba(255, 255, 255, 0.15)", // Custom shadow with slightly more intensity
      },
    },
  },
  plugins: [],
  // prevents tailwind from overriding the default mode with the system preference
  darkMode: "class",
};
export default config;
