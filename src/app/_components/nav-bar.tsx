import { ComponentPropsWithoutRef } from "react";
interface NavLinkProps extends ComponentPropsWithoutRef<"a"> {}

const NavLink = (props: NavLinkProps) => {
  const { href, children } = props;
  return <a href={href}>{children}</a>;
};

const NavBar = () => {
  return (
    <nav className="border-gray-200 dark:bg-gray-900 bg-light-background-muted">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span className="dark:text-white self-center whitespace-nowrap text-2xl font-semibold">
            Flowbite
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 md:bg-white md:dark:bg-gray-900 mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
            <li>
              <NavLink href="">Home</NavLink>
            </li>
            <li>
              <NavLink href="">Blog</NavLink>
            </li>
            <li>
              <NavLink href="">Résumé</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
