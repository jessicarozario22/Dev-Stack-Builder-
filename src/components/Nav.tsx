import { useState } from "react";
import Logo from "../assets/logo-text.png";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-base-100">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">

        {/* ================= Desktop Navbar ================= */}
        <nav className="hidden items-center justify-between lg:flex">

          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src={Logo}
              alt="Dev Stack Builder"
              className="h-9 w-auto sm:h-10"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#"
                className="transition hover:font-bold hover:text-pink-500"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                className="transition hover:font-bold hover:text-pink-500"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:font-bold hover:text-pink-500"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:font-bold hover:text-pink-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:font-bold hover:text-pink-500"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="flex items-center gap-4">
            <button>Sign in</button>

            <button className="btn btn-secondary h-10 rounded-full">
              Sign up
            </button>
          </div>
        </nav>

        {/* ================= Mobile Navbar ================= */}
        <nav className="relative flex items-center justify-between lg:hidden">

          {/* Hamburger - Left */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-2xl text-slate-800 transition hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo - Center */}
          <a
            href="#"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img
              src={Logo}
              alt="Dev Stack Builder"
              className="h-8 w-auto"
            />
          </a>

          {/* Mobile Auth Buttons - Right */}
          <div className="flex items-center gap-2">
            <button className="text-sm font-medium">
              Sign in
            </button>

            <button className="btn btn-secondary btn-sm rounded-full">
              Sign up
            </button>
          </div>
        </nav>

        {/* ================= Mobile Menu ================= */}
        {isMenuOpen && (
          <div className="border-t border-slate-200 pt-4 lg:hidden">
            <ul className="flex flex-col gap-3">

              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-slate-100"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-slate-100"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-slate-100"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-slate-100"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-slate-100"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;