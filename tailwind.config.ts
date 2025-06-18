import type { Config } from "tailwindcss";

const config: Config = {
  // PASTIKAN BAGIAN INI SUDAH BENAR
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Jika Anda memutuskan memakai folder 'src', tambahkan juga:
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#121212", // Background utama
        secondary: "#1E1E1E", // Warna background sedikit lebih terang
        accent: "#7E22CE", // Warna ungu untuk aksen
      },
    },
  },
  plugins: [],
};
export default config;
