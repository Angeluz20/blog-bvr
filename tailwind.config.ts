import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(select|listbox|divider|popover|button|ripple|spinner|scroll-shadow).js"
  ],
  theme: {
    screens:{
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
        green_me_dark:"var(--color-green-medium-dark)",
        green_light: "var(--color-green-ligth)",
        green_m: "var(--color-green-medium)",
        orange: "var(--color-yellow-200)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
