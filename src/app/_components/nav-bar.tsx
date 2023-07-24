"use client";
import { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import navEdgeImg from "@assets/images/nav-edge.svg";

interface NavLinkProps extends PropsWithChildren<LinkProps> {}

const NavLink = (props: NavLinkProps) => {
  const { href, children } = props;
  const pathName = usePathname();
  const isActive = pathName === href;
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
  return (
    <nav className="mx-auto hidden max-w-5xl flex-wrap items-center justify-between sm:flex">
      <div
        className="relative ml-auto h-[68px] w-full rounded-t-big bg-light-background lg:w-fit lg:rounded-tl-none lg:pl-4 lg:pr-10 lg:pt-4"
        id="navbar-default"
      >
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
  );
};

export default NavBar;
