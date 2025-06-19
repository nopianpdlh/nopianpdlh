import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Skema Warna Gelap dengan Aksen Neon/Cyberpunk
        primary: "#0A0A0A", // Hitam pekat untuk kedalaman
        secondary: "#1A1A1A", // Abu-abu gelap untuk panel
        glass: "rgba(26, 26, 26, 0.5)", // Warna untuk panel kaca

        // Aksen Warna Cerah
        "accent-pink": "#F000B8", // Neon Pink
        "accent-purple": "#7E22CE", // Cyber Purple
        "accent-blue": "#00F2EA", // Electric Blue
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Menambahkan animasi untuk efek-efek modern
      animation: {
        glow: "glow 4s linear infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
      // Menambahkan backdrop-blur untuk efek kaca
      backdropBlur: {
        xl: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
