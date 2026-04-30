import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbarDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSmoothScroll = (e, targetId) => {
    if (targetId) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  }

  return ( 
    <div className="w-full sticky top-0 z-50 backdrop-blur-md bg-customPurple-darker/80 transition-all duration-300 border-b border-customPurple border-opacity-30">
      <nav className="w-full px-14 py-6 list-none flex items-center justify-between text-sm lg:px-16">
        <li className="text-xl font-bold text-white lg:text-3xl xl:text-4xl"><a href="#hero">get<span className="text-customPurple">linked</span></a></li>
        <div className="lg:flex justify-center items-center gap-16 xl:gap-32 hidden">
          <span className="flex gap-10 font-medium lg:text-base  ">
            <Link className="navstyle font-montserrat" to="/">Home</Link>
            <li><a className="navstyle" href="#timeline" onClick={(e) => handleSmoothScroll(e, 'timeline')}>Timeline</a></li>
            <li><a className="navstyle" href="#overview" onClick={(e) => handleSmoothScroll(e, 'overview')}>Overview</a></li>
            <li><a className="navstyle" href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>FAQs</a></li>
            <Link className="navstyle font-montserrat" to="/contact">Contact</Link>
          </span>
          <Link to="/register" className="navButton py-[14px] px-12 gradient-button lg:text-base lg:font-bold transition-all duration-300">
            Register
          </Link>
        </div>

        <li className="lg:hidden" onClick={toggleNavbarDropdown}><HiMenuAlt1 className="font-bold text-white cursor-pointer"/></li>
      </nav>
      {isOpen && 
        <div>
          <div className="fixed inset-0 top-20 bg-black/40 z-10 lg:hidden" onClick={() => setIsOpen(false)}></div>
          <div className="text-right px-14 absolute w-full z-20 bg-customPurple-darker py-2 text-xs font-semibold border-b-[1px]">
            <span className="list-none flex flex-col gap-2 lg:gap-6">
              <span className="flex flex-col gap-3 lg:gap-12">
                <li><a className="navstyle" href="#timeline" onClick={(e) => handleSmoothScroll(e, 'timeline')}>Timeline</a></li>
                <li><a className="navstyle" href="#overview" onClick={(e) => handleSmoothScroll(e, 'overview')}>Overview</a></li>
                <li><a className="navstyle" href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>FAQs</a></li>
                <Link className="navstyle" to="/contact">Contact</Link>
              </span>
              <Link to="/register" className="button w-36 py-[14px] gradient-button text-sm font-black font-montserrat transition-all duration-300">
                  Register
              </Link>
            </span>
        </div>
        </div>
      }
    </div>
   );
}

export default Navbar;