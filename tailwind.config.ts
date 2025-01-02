import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        customGray: '#18191c',
      },
      backgroundImage: {
        'hero-section-background-main': 'url(https://m.media-amazon.com/images/S/pv-target-images/3f8ae4a13de932bc679af5272ce983693d773818ff67a774dfcf0592bcd3beb7._SX1080_FMjpg_.jpg)',
        'hero-section-background-characters': 'url(/characters-bg.jpg)',
        'hero-section-background-episodes': 'url(/episodes-bg.jpg)', 
      },
    },
  },
} satisfies Config;