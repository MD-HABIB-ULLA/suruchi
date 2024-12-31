/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "serif"], // Adding custom Jost font
      },
      colors: {
        background: "var(--background)", // Background color
        foreground: "var(--foreground)", // Foreground color
        primary: "var(--primary-color)", // Primary color
        secondary: "var(--secondary-color)", // Secondary color
        muted: "var(--muted)", // Muted color (if defined in CSS)
        error: "var(--error)", // Error color (if defined in CSS)
        darkBackground: "var(--dark-background)", // Dark mode background
        darkForeground: "var(--dark-foreground)", // Dark mode foreground
        darkTextColor: "var(--dark-text-color)", // Dark mode text color
        darkBorderColor: "var(--dark-border-color)", // Dark mode border color
        
      },
    },
  },
  plugins: [],
};
