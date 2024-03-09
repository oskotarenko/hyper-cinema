import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      screens: {
        "phone-sm": "320px",
        "phone-md": "375px",
        "phone-lg": "425px",
        tablet: "768px",
        laptop: "1024px",
        "desktop-sm": "1280px",
        "desktop-md": "1440px",
        "desktop-lg": "2560px",
        "desktop-xl": ""
      },
      colors: {
        primary: '#63f655',
        background: '#0d0c0c',
        white: '#eeeeee',
        gray: '#5a5d66'
      },
    },
  },
} satisfies Config

export default config