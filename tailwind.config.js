/** @type {import('tailwind').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0b0b0e",
        foreground: "#f5f5f0",
        surface: {
          50: "#131318",
          100: "#1a1a22",
          200: "#242430",
          300: "#323242",
        },
        editorial: {
          cream: "#f5f5f0",
          muted: "#9e9eb0",
          dim: "#5c5c70",
          border: "rgba(255, 255, 255, 0.08)",
          "border-bright": "rgba(255, 255, 255, 0.2)",
        },
        accent: {
          coral: "#ff4d4d",
          amber: "#f59e0b",
          cyan: "#00e5ff",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "scroll-fast": "scrollFeed 8s linear infinite",
        "scroll-slow": "scrollFeed 16s linear infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        scrollFeed: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
      },
    },
  },
  plugins: [],
};
