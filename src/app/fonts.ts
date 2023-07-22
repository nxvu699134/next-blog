import { Inter, Aleo } from "next/font/google";

export const inter = Inter({
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
