import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        gold: "#F29422",
        militaryGreen: "#095660",
      },
      backgroundImage: {
        background:
          "linear-gradient(163deg, rgba(9,86,96,1) 0%, rgba(42,78,118,1) 54%, rgba(60,104,145,1) 84%)",
        goldGradient:
          "linear-gradient(163deg, rgba(227,208,113,0.8) 0%, rgba(215,194,108,0.8) 54%, rgba(202,172,98,0.8) 84%);",
      },
    },
  },
  plugins: [],
};
export default config;
