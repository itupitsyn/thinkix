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
        "helvetica-now-regular": "HelveticaNowDisplay-Regular",
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
        "fuchsia-to-blue-65":
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%), linear-gradient(117deg, #E75FA1 20%, #D451C1 50%, #9B55F3 75%, #6A8BE7 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
