import { Inter, Aleo } from "next/font/google";

export const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const aleo = Aleo({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-aleo",
  subsets: ["latin"],
});
