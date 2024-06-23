import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "0.9rem",
        md: "1.1rem",
        lg: "1.4rem",
        xl: "3rem",
        "2xl": "5.3rem",
        "3xl": "8.6rem",
      },
      colors: {
        "bk-white": "#FBFBFB",
        "bk-blue": "#222E50",
        "bk-off-blue": "#1F9C7E",
      },
    },
  },
  plugins: [],
};
export default config;
