import { PALETTE as p } from "./palette";
const boxShadow = {
  // light
  input: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  dropdown: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  // dark
  "dark-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "dark-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  "dark-dropdown":
    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
};

const borderRadius = {
  small: "0.375rem",
  default: "0.5rem",
  full: "9999px",
};

const fontSize = {
  label: ["0.75rem"],
  default: ["0.875rem", { lineHeight: "1.25rem" }],
  title: ["1.125rem", { lineHeight: "1.75rem" }],
  metric: ["1.875rem", { lineHeight: "2.25rem" }],
};

const colors = {
  // light mode
  light: {
    brand: {
      faint: p.blue["50"], // blue-50
      muted: p.blue["200"], // blue-200
      subtle: p.blue["400"], // blue-400
      DEFAULT: p.blue["500"], // blue-500
      emphasis: p.blue["700"], // blue-700
      inverted: "#ffffff", // white
    },
    background: {
      muted: p.gray["50"], // gray-50
      subtle: p.gray["100"], // gray-100
      DEFAULT: "#ffffff", // white
      emphasis: p.gray["700"], // gray-700
    },
    border: {
      DEFAULT: p.gray["200"], // gray-200
    },
    ring: {
      DEFAULT: p.gray["200"], // gray-200
    },
    content: {
      subtle: p.gray["400"], // gray-400
      DEFAULT: p.gray["500"], // gray-500
      emphasis: p.gray["700"], // gray-700
      strong: p.gray["900"], // gray-900
      inverted: "#ffffff", // white
    },
  },
  // dark mode
  dark: {
    brand: {
      faint: "#0B1229", // custom
      muted: p.blue["950"], // blue-950
      subtle: p.blue["800"], // blue-800
      DEFAULT: p.blue["500"], // blue-500
      emphasis: p.blue["400"], // blue-400
      inverted: p.gray["950"], // gray-950
    },
    background: {
      muted: "#131A2B", // custom
      subtle: p.gray["800"], // gray-800
      DEFAULT: p.gray["900"], // gray-900
      emphasis: p.gray["300"], // gray-300
    },
    border: {
      DEFAULT: p.gray["800"], // gray-800
    },
    ring: {
      DEFAULT: p.gray["800"], // gray-800
    },
    content: {
      subtle: p.gray["600"], // gray-600
      DEFAULT: p.gray["600"], // gray-600
      emphasis: p.gray["200"], // gray-200
      strong: p.gray["50"], // gray-50
      inverted: "#000000", // black
    },
  },
};

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: colors,
    extend: {
      boxShadow: boxShadow,
      borderRadius: borderRadius,
      fontSize: fontSize,
    },
  },
  plugins: [],
};

export default config;
