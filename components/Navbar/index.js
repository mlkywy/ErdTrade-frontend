import { Menu, NavLink, Primary, Secondary } from "../NavbarButtons";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              LOGO GOES HERE
            </span>
          </a>

          {/* Button */}
          <div className="flex md:order-2 flex-row items-center gap-0 md:gap-4 justify-between">
            <Primary text="Sign Up" />
            <Secondary text="Log In" />
            <Menu />
          </div>

          {/* Links */}
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavLink text="Home" />
              <NavLink text="About" />
              <NavLink text="Services" />
              <NavLink text="Contact" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
