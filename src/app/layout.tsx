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
      <body className={classnames(inter.className)}>
        <NavBar />
        <main className="mx-auto flex max-w-5xl rounded-b-big rounded-tl-[30px] bg-light-background">
          <SideBar />
          <div id="main-content" className="mx-8 my-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
