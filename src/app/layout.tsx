import classnames from "classnames";
import "./globals.css";
import NavBar from "@components/nav-bar";
import SideBar from "@components/side-bar";
import { inter, aleo } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${aleo.variable}`}>
      <body
        className={classnames(inter.className, "p-4 leading-[1.65] sm:p-8")}
      >
        <NavBar />
        <main className="mx-auto flex max-w-5xl flex-col  rounded-big bg-light-background sm:rounded-t-none lg:flex-row lg:rounded-tl-big">
          <SideBar />
          <div id="main-content" className="mx-6 my-10 sm:mx-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
