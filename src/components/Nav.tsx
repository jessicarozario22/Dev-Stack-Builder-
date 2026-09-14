import { useState } from "react";
import Logo from "../assets/logo-text.png";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <nav className="bg-base-100 shadow-sm">
    <header className="border-b border-slate-200 bg-base-100 sticky top-0 z-50  ">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
            
          <a href="#" className="shrink-0">
            <img
              src={Logo}
              alt="Dev Stack Builder"
              className="h-9 w-auto sm:h-10"
            />
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            <li>
              <a href="#" className="transition hover:text-primary">
                Home
              </a>
            </li>

            <li>
              <a href="#technologies" className="transition hover:text-primary">
                Technologies
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-primary">
                Projects
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-primary">
                About
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-primary">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <button>Sign in</button>

             <button className="btn btn-secondary rounded-full">Sign up</button>
              
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-2xl text-slate-800 transition hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-slate-200 pt-4 lg:hidden">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-5 flex gap-3 border-t border-slate-200 pt-4">
              <button className="flex-1 rounded-lg border border-slate-300 py-2">
                Sign in
              </button>

              <button className="btn btn-secondary flex-1">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
  
    </header>

  );
};

export default Nav;