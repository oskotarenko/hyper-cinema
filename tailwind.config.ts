import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#63f655',
        background: '#0d0c0c',
        white: '#eeeeee',
        gray: '#5a5d66'
      },
    },
  },
  plugins: [],
};
export default config;
