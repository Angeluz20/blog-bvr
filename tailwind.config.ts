import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      "mb": "460px",
      "sm":"640px",
      "md":"760px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl":"1536px"

    },
    extend: {
      colors: {
        text:"var(--color-text)",
        background:"var(--color-background)",
        green_dark:"var(--color-green-dark)",
        green_me_dark:"var(--color-green_medium_dark)",
        green_light: "var(--color-green_light)",
        green_m: "var(--color-green-medium)",
        orange: "var(--color-yellow-200)",
      },
    },
  },
  plugins: [],
};
export default config;
