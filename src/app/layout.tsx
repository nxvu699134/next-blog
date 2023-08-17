"use client";
import clsx from "clsx";
import "@styles/globals.scss";
import NavBar from "@components/nav-bar";
import SideBar from "@components/side-bar";
import { inter, aleo } from "./fonts";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const shouldHideSidebar =
    pathName.startsWith("/blog") && pathName.split("/").length > 2; // /blog/blah-blah => ['', 'blog', 'blah-blah']
  return (
    <html lang="en" className={`${inter.variable} ${aleo.variable}`}>
      <body
        className={clsx(
          inter.className,
          "p-4 text-[15px] leading-[1.65] sm:p-8",
        )}
      >
        <NavBar />
        <main
          id="main-container"
          className="mx-auto flex w-full max-w-5xl flex-col rounded-big  bg-light-background sm:w-11/12 sm:rounded-t-none md:w-10/12 lg:w-full lg:flex-row lg:rounded-tl-big"
        >
          {!shouldHideSidebar && <SideBar />}
          <div id="main-content" className="mx-6 my-10 sm:mx-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
