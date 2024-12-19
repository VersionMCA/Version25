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
          blue: "#37748C", // RGB: 55, 116, 140
          lime: "#BFF205", // RGB: 191, 242, 5
          cream: "#EBF2D0", // RGB: 235, 242, 208
          yellow: "#D7F205", // RGB: 215, 242, 5
          black: "#0D0C0C", // RGB: 13, 12, 12
        },
      },
      clipPath: {
        'custom': 'polygon(0% 0%, 85% 0%, 100% 40%, 100% 100%, 15% 100%, 0% 60%)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path')
  ],
};
