import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#eab308",
        buttonHoverColor: "#004e89",
        secondary: "#4B5945",
        // iconColor: "#eab308",
        iconColor: "#FF6600",
        hoverColor: "#1f2937",
        white: "#FFFFFF",
        background: {
          light: "#ffffff",
          dark: "#000000",
        },
        text: {
          light: "#ffffff",
          dark: "#000000",
        },
      },
      spacing: {},
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        circular: ["'Flow Circular'", "sans-serif"],

        epilogue: [
          "Epilogue",
          "Segoe UI",
          "Helvetica Neue",
          "system-ui",
          "sans-serif",
        ],
      },
      //   borderRadius: {
      //     none: "0",
      //     sm: "calc(var(--radius) - 4px)",
      //     DEFAULT: "0.25rem",
      //     md: "calc(var(--radius) - 2px)",
      //     lg: "var(--radius)",
      //     xl: "0.75rem",
      //     "2xl": "1rem",
      //     full: "9999px",
      //   },
      backgroundImage: {
        "gradient-left-right": "linear-gradient(to top, #a16207, #FF6600)",
        "gradient-left-right-alt":
          "linear-gradient(to bottom, #b91c1c, #FF6600)",
        "noise-light": "url('/assets/noiseImages/bg-white-noise.webp')",
        "noise-dark": "url('/assets/noiseImages/bg-dark-noise.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
