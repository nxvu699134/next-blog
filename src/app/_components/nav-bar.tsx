"use client";
import { PropsWithChildren, Fragment, useState, useCallback } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import navEdgeImg from "@assets/images/nav-edge.svg";
import MenuButton from "@components/menu-button";

interface NavLinkProps extends PropsWithChildren<LinkProps> {}

const NavLink = (props: NavLinkProps) => {
  const { href, children, onClick } = props;
  const pathName = usePathname();
  const isActive =
    (pathName === "/" && pathName === href) ||
    (pathName !== "/" && pathName.split("/")[1] === href.toString().slice(1));
  return (
    <Link
      className={clsx(
        "block rounded-lg uppercase sm:px-4 sm:py-2",
        !isActive && "max-sm:text-blue-300 sm:hover:text-light-content-subtle",
        isActive && "text-light-brand-inverted sm:bg-light-brand",
        "max-sm:px-16 max-sm:py-3.5 max-sm:text-2xl",
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const NavBar = () => {
  const [toggled, setToggled] = useState<boolean>(false);

  const closeMenu = useCallback(() => setToggled(false), []);

  return (
    <Fragment>
      <MenuButton
        toggled={toggled}
        onClick={() => setToggled((t) => !t)}
        className="!fixed bottom-0 right-0 z-50 sm:hidden"
      />
      <nav className="mx-auto w-full max-w-5xl sm:block sm:w-11/12 md:w-10/12 lg:w-full">
        <div
          className={clsx(
            "fixed right-0 top-0 z-20 h-full w-[100vh] origin-bottom-right bg-light-brand transition-all duration-300 sm:hidden",
            toggled
              ? "visible translate-x-0 translate-y-0 scale-100 rounded-none"
              : "invisible scale-0 rounded-l-[100%] rounded-tr-[100%]",
          )}
        />
        <div
          className={clsx(
            "relative ml-auto sm:h-[68px] sm:rounded-t-big sm:bg-light-background lg:w-fit lg:rounded-tl-none lg:pl-4 lg:pr-10 lg:pt-4",
            "max-sm:fixed max-sm:bottom-[64px] max-sm:left-0 max-sm:right-0 max-sm:z-20 max-sm:mx-auto max-sm:transition-all max-sm:duration-500",
            toggled
              ? "max-sm:translate-y-0 max-sm:opacity-100"
              : "max-sm:translate-y-full max-sm:opacity-0",
          )}
        >
          <div
            className="absolute left-[-131px] top-0 hidden h-full w-[135px] lg:block"
            style={{
              backgroundImage: `url(${navEdgeImg.src})`,
            }}
          />
          <ul
            className={clsx(
              "flex h-full flex-col items-center justify-center sm:flex-row sm:space-x-1.5",
              "max-sm:space-y-6",
            )}
          >
            <li>
              <NavLink href="/" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink href="/resume" onClick={closeMenu}>
                Résumé
              </NavLink>
            </li>
            <li>
              <NavLink href="/blog" onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
