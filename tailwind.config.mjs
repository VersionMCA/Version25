/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          blue_light: "#326B83", // RGB: 50, 107, 131
          blue_dark: "#092C3B", // RGB: 9, 44, 59
          lime: "#C6FF00", // RGB: 198, 255, 0
          light_lime: "#d4ff41", // RGB: 212, 255, 65
          cream: "#F4FFD8", // RGB: 244, 255, 216
          yellow: "#D7F205", // RGB: 215, 242, 5
          black: "#171616", // RGB: 23, 22, 22
        },
      },
      clipPath: {
        custom:
          "polygon(0 0, calc(100% - 17px) 0, 100% 17px, 100% 100%, 17px 100%, 0 calc(100% - 17px))",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
