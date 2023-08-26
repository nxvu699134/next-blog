"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@components/side-bar";

const SidebarContainer = () => {
  const pathName = usePathname();
  const shouldHideSidebar =
    pathName.startsWith("/blog") && pathName.split("/").length > 2; // /blog/blah-blah => ['', 'blog', 'blah-blah']

  if (shouldHideSidebar) return null;

  return <Sidebar />;
};

export default SidebarContainer;
