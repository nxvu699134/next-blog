import { Metadata } from "next";
import clsx from "clsx";
import "@styles/globals.scss";
import NavBar from "@components/nav-bar";
import SideBarContainer from "@components/side-bar-container";
import { inter, aleo } from "@constants/fonts";
import siteInfo from "@constants/site-info";

export const metadata: Metadata = {
  keywords: [...siteInfo.keywords],
  icons: {
    icon: [
      {
        url: "favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    description: siteInfo.desc,
    url: siteInfo.siteUrl,
    siteName: siteInfo.siteName,
    images: ["/android-chrome-192x192.png"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <SideBarContainer />
          <div id="main-content" className="mx-6 my-10 sm:mx-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
