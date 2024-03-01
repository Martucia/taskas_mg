import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        terq: "#29A19C",
        gold: "#ECCA75",
        dang: "#F05454",
        whiteT: "#FAFAFA",
        blackT: "#282846",
        sideBarBg: "#2C3440",
        pageBg: "#222831",
      },
    },
  },
  plugins: [],
};
export default config;
