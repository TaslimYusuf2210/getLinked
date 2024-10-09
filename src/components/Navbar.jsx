import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbarDropdown = () => {
    setIsOpen(!isOpen)
  }

  return ( 
    <div className="w-full">
      <nav className="w-full px-14 py-6 list-none flex items-center justify-between text-sm">
        <li className="text-xl font-bold text-white">get<span className="text-customPurple">linked</span></li>
        <div className="md:flex justify-center items-center gap-4 hidden">
          <span className="flex gap-2 font-medium">
            <li className="hover:text-base"><a href="">Timeline</a></li>
            <li className="hover:text-base"><a href="">Overview</a></li>
            <li className="hover:text-base"><a href=""> FAQs</a></li>
            <li className="hover:text-base hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-customPurple-light hover:to-customPurple-dark"><a href=""> Contact</a></li>
          </span>
          <button className="button w-36 py-[14px] gradient-button">
            Register
          </button>
        </div>

        <li className="md:hidden" onClick={toggleNavbarDropdown}><HiMenuAlt1 className="font-bold text-white cursor-pointer"/></li>
      </nav>
      <hr className="border-solid"/>
      {isOpen && <div className="text-right px-14 absolute w-full z-20 bg-customPurple-darker py-2 text-xs font-semibold border-b-[1px]">
        <span className="list-none flex flex-col gap-2">
          <li className="hover:text-sm"><a href="">Timeline</a></li>
          <li className="hover:text-sm"><a href="">Overview</a></li>
          <li className="hover:text-sm"><a href=""> FAQs</a></li>
          <li className="hover:text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-customPurple-light hover:to-customPurple-dark"><a href=""> Contact</a></li>
          <li>
            <button className="button w-36 py-[14px] gradient-button text-sm font-bold">
              Register
            </button>
          </li>
        </span>
      </div>}
    </div>
   );
}

export default Navbar;