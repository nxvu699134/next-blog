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
  avatar: "0 16px 24px rgba(134, 151, 168, 0.4)",
  "timeline-dot": "0 0 0 4px rgba(59, 130, 246, 0.25)",
  cta: "0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1.5px 0 #60a4f9",
  "cta-hover": "0 1px 2px rgba(0, 0, 0, 0.2)",
};

const borderRadius = {
  small: "0.375rem",
  default: "0.5rem",
  semi: "20px",
  big: "28px",
  full: "9999px",
};

const fontSize = {
  label: ["0.75rem"],
  default: ["0.875rem", { lineHeight: "1.25rem" }],
  title: ["1.125rem", { lineHeight: "1.75rem" }],
  metric: ["1.875rem", { lineHeight: "2.25rem" }],
};

const fontFamily = {
  article: ["var(--font-inter)"],
  heading: ["var(--font-aleo)"],
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
      muted: p.slate["50"], // gray-50
      subtle: p.slate["100"], // gray-100
      DEFAULT: "#ffffff", // white
      emphasis: p.slate["700"], // gray-700
    },
    border: {
      DEFAULT: p.slate["200"], // gray-200
    },
    ring: {
      DEFAULT: p.slate["200"], // gray-200
    },
    content: {
      faint: p.slate["200"],
      subtle: p.slate["400"], // gray-400
      DEFAULT: p.slate["500"], // gray-500
      emphasis: p.slate["600"], // gray-700
      strong: p.slate["700"], // gray-900
      inverted: "#ffffff", // white
    },
  },
  ...p,
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
      fontFamily: fontFamily,
      screens: {
        lg: "992px",
      },
      typography: ({ theme }) => ({
        blog: {
          css: {
            "--tw-prose-body": theme("colors.light.content.DEFAULT"),
            "--tw-prose-headings": theme("colors.light.content.strong"),
            "--tw-prose-lead": theme("colors.light.content.emphasis"),
            "--tw-prose-links": theme("colors.light.content.strong"),
            "--tw-prose-bold": theme("colors.light.content.strong"),
            "--tw-prose-counters": theme("colors.light.content.emphasis"),
            "--tw-prose-bullets": theme("colors.light.content.subtle"),
            "--tw-prose-hr": theme("colors.light.content.subtle"),
            "--tw-prose-quotes": theme("colors.light.content.strong"),
            "--tw-prose-quote-borders": theme("colors.light.content.subtle"),
            "--tw-prose-captions": theme("colors.light.content.emphasis"),
            "--tw-prose-code": theme("colors.light.content.emphasis"),
            "--tw-prose-pre-code": theme("colors.light.content.faint"),
            "--tw-prose-pre-bg": theme("colors.light.content.strong"),
            "--tw-prose-th-borders": theme("colors.light.content.subtle"),
            "--tw-prose-td-borders": theme("colors.light.content.faint"),
            "--tw-prose-invert-body": theme("colors.light.content.faint"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.light.content.subtle"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.light.content.subtle"),
            "--tw-prose-invert-bullets": theme("colors.light.content.emphasis"),
            "--tw-prose-invert-hr": theme("colors.light.content.emphasis"),
            "--tw-prose-invert-quotes": theme("colors.light.content.faint"),
            "--tw-prose-invert-quote-borders": theme(
              "colors.light.content.emphasis",
            ),
            "--tw-prose-invert-captions": theme("colors.light.content.subtle"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.light.content.subtle"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme(
              "colors.light.content.emphasis",
            ),
            "--tw-prose-invert-td-borders": theme(
              "colors.light.content.emphasis",
            ),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
