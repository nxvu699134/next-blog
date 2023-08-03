"use client";
import { PropsWithChildren, Fragment, useState } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import navEdgeImg from "@assets/images/nav-edge.svg";
import MenuButton from "@components/menu-button";

interface NavLinkProps extends PropsWithChildren<LinkProps> {}

const NavLink = (props: NavLinkProps) => {
  const { href, children } = props;
  const pathName = usePathname();
  const isActive =
    (pathName === "/" && pathName === href) ||
    (pathName !== "/" && pathName.split("/")[1] === href.toString().slice(1));
  return (
    <Link
      className={clsx(
        "rounded-lg px-4 py-2 uppercase",
        isActive && "bg-light-brand text-light-brand-inverted",
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

const NavBar = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  return (
    <Fragment>
      <MenuButton
        toggled={toggled}
        onClick={() => setToggled((t) => !t)}
        className="!fixed right-0 top-0 sm:hidden"
      />
      <nav className="mx-auto hidden w-full max-w-5xl  sm:block sm:w-11/12 md:w-10/12 lg:w-full">
        <div className="relative ml-auto h-[68px] rounded-t-big bg-light-background lg:w-fit lg:rounded-tl-none lg:pl-4 lg:pr-10 lg:pt-4">
          <div
            className="absolute left-[-131px] top-0 hidden h-full w-[135px] lg:block"
            style={{
              backgroundImage: `url(${navEdgeImg.src})`,
            }}
          />
          <ul className="flex h-full items-center justify-center space-x-1.5">
            <li>
              <NavLink href="/">About</NavLink>
            </li>
            <li>
              <NavLink href="/resume">Résumé</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
