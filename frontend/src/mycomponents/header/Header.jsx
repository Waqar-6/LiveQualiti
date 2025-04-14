import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const navLinks = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
    { link: "/services", label: "Services" },
    { link: "/contact", label: "Contact" },
  ];
  return (
    <header className="">
      <nav className="w-full container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        <h3 className="cursor-pointer font-bold text-accent-foreground opacity-80 hover:opacity-100 transition-opacity duration-800 ease-in-out">
          livQuality
        </h3>

        <ul className=" hidden md:flex items-center md:space-x-28">
          {navLinks.map((link) => (
            <li
              className={`cursor-pointer text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gray-600 after:transition-all
                ${
                  activeLink === link.link
                    ? "text-primary after:w-full  "
                    : "text-gray-600 hover:text-gray-900"
                }`}
              key={link.label}
              onClick={() => setActiveLink(link.link)}
            >
              {link.label}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-8">
          <Button variant={"outline"} className={"cursor-pointer text-center"}>
            Login
          </Button>
          <Button className={"cursor-pointer text-center"}>Signup</Button>
        </div>

        <button
          className="md:hidden cursor-pointer p-2 transition-all delay-100 ease-in-out"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </nav>

      {/* mobile menu */}

      {isMenuOpen && (
        <div className="md:hidden py-4 border-t">
          <ul className="container mx-auto px-4 space-y-10">
            {navLinks.map((link) => (
              <li
                className={`block cursor-pointer text-sm font-medium
                ${
                  activeLink === link.link
                    ? "text-primary after:w-full  "
                    : "text-gray-600 hover:text-gray-900"
                }`}
                key={link.label}
                onClick={() => setActiveLink(link.link)}
              >
                {link.label}
              </li>
            ))}
            <div className="space-y-3">
              <Button
                variant={"outline"}
                className={"cursor-pointer text-center w-full "}
              >
                Login
              </Button>
              <Button className={"cursor-pointer text-center w-full"}>
                Signup
              </Button>
            </div>
          </ul>
        </div>
      )}

      {/* mobile menu */}
    </header>
  );
};

export default Header;
