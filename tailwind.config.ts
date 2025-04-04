import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        "integralcf-demibold": "integralcf-demibold",
        "messina-mono": "MessinaSansMono-Book",
      },
      backgroundColor: {
        main: "#0f0f0f",
      },
      colors: {
        coral: "#e75fa1",
      },
      backgroundImage: {
        "blue-to-fuchsia":
          "linear-gradient(94deg, rgba(106,139,231,1) 7%, rgba(155,85,243,1) 25%, rgba(212,81,193,1) 50%, rgba(231,95,161,1) 80%)",
      },
    },
  },
  plugins: [],
};
export default config;
