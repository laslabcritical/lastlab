import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4fb",
          100: "#d9e6f7",
          200: "#b8d0ee",
          300: "#88afdf",
          400: "#5a88cc",
          500: "#3f6fb5",
          600: "#315999",
          700: "#274879",
          800: "#20395f",
          900: "#1a2d49"
        },
        ink: "#13233a",
        muted: "#48607d",
        accent: "#b18a4b"
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px -28px rgba(15, 32, 57, 0.35)",
        panel: "0 16px 40px -24px rgba(17, 39, 71, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
