import { HiMenuAlt1 } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSmoothScroll = (e, targetId) => {
    if (targetId) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-customPurple-darker/80 transition-all duration-300 border-b border-customPurple border-opacity-30">
        <nav className="w-full md:px-10 px-6 py-6 list-none flex items-center justify-between text-sm lg:px-16">
          <li className="text-xl font-bold text-white lg:text-3xl xl:text-4xl">
            <a href="#hero">
              get<span className="text-customPurple">linked</span>
            </a>
          </li>
          <div className="lg:flex justify-center items-center gap-16 xl:gap-32 hidden">
            <span className="flex gap-10 font-medium lg:text-base  ">
              <Link className="navstyle font-montserrat" to="/">
                Home
              </Link>
              <li>
                <a
                  className="navstyle"
                  href="#timeline"
                  onClick={(e) => handleSmoothScroll(e, "timeline")}
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  className="navstyle"
                  href="#overview"
                  onClick={(e) => handleSmoothScroll(e, "overview")}
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  className="navstyle"
                  href="#faq"
                  onClick={(e) => handleSmoothScroll(e, "faq")}
                >
                  FAQs
                </a>
              </li>
              <Link className="navstyle font-montserrat" to="/contact">
                Contact
              </Link>
            </span>
            <Link
              to="/register"
              className="navButton py-[14px] px-12 gradient-button lg:text-base lg:font-bold transition-all duration-300"
            >
              Register
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2 focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <HiMenuAlt1 className="font-bold text-2xl" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] md:w-1/2 bg-customPurple-darker/95 z-50 lg:hidden transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button Container */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-customPurple hover:text-white focus:outline-none transition-colors cursor-pointer"
            aria-label="Close Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center flex-grow space-y-8 pb-24 text-white font-montserrat">
          <Link
            className="navstyle font-medium text-base"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a
            className="navstyle font-medium text-base"
            href="#timeline"
            onClick={(e) => handleSmoothScroll(e, "timeline")}
          >
            Timeline
          </a>
          <a
            className="navstyle font-medium text-base"
            href="#overview"
            onClick={(e) => handleSmoothScroll(e, "overview")}
          >
            Overview
          </a>
          <a
            className="navstyle font-medium text-base"
            href="#faq"
            onClick={(e) => handleSmoothScroll(e, "faq")}
          >
            FAQs
          </a>
          <Link
            className="navstyle font-medium text-base"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Register Button */}
          <Link
            to="/register"
            className="button py-[14px] px-12 gradient-button font-bold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
