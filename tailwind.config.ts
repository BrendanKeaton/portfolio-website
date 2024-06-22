import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        sm: "0.9rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "3.5rem",
        "2xl": "5.5rem",
        "3xl": "8.75rem",
      },
      colors: {
        "bk-white": "#FBFBFB",
        "bk-blue": "#222E50",
        "bk-off-blue": "#007991",
      },
    },
  },
  plugins: [],
};
export default config;
