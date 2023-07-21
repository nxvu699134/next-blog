import classnames from "classnames";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@components/nav-bar";
import SideBar from "@components/side-bar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const adelle = localFont({
  src: [
    {
      path: "../assets/fonts/Adelle/Adelle-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Adelle/Adelle-italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Adelle/Adelle-700.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Adelle/Adelle-700italic.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/Adelle/Adelle-900.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Adelle/Adelle-900italic.woff",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-adelle",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${adelle.variable}`}>
      <body className={classnames(inter.className, "bg-illustration p-8")}>
        <NavBar />
        <main className="mx-auto flex max-w-5xl rounded-b-big rounded-tl-[30px] bg-light-background">
          <SideBar />
          <div id="main-content">{children}</div>
        </main>
      </body>
    </html>
  );
}
