import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbarDropdown = () => {
    setIsOpen(!isOpen)
  }

  return ( 
    <div className="w-full xl:max-w-[1812px] xl:mx-auto">
      <nav className="w-full px-14 py-6 list-none flex items-center justify-between text-sm lg:px-20">
        <li className="text-xl font-bold text-white lg:text-3xl xl:text-4xl">get<span className="text-customPurple">linked</span></li>
        <div className="lg:flex justify-center items-center gap-16 xl:gap-32 hidden">
          <span className="flex gap-7 font-medium lg:text-base xl:gap-20 ">
            <li className="navstyle"><a href="">Timeline</a></li>
            <li className="navstyle"><a href="">Overview</a></li>
            <li className="navstyle"><a href=""> FAQs</a></li>
            <li className="hover:text-base hover:text-transparent font-montserrat hover:bg-clip-text hover:bg-gradient-to-r hover:from-customPurple-light hover:to-customPurple-dark"><a href=""> Contact</a></li>
          </span>
          <button className="button w-36 py-[14px] gradient-button xl:w-44 lg:text-base lg:font-bold">
            Register
          </button>
        </div>

        <li className="lg:hidden" onClick={toggleNavbarDropdown}><HiMenuAlt1 className="font-bold text-white cursor-pointer"/></li>
      </nav>
      <hr className="border-solid"/>
      {isOpen && <div className="text-right px-14 absolute w-full z-20 bg-customPurple-darker py-2 text-xs font-semibold border-b-[1px]">
        <span className="list-none flex flex-col gap-2 lg:gap-6">
          <span className="flex flex-col gap-3 lg:gap-12">
            <li className="hover:text-sm font-montserrat"><a href="">Timeline</a></li>
            <li className="hover:text-sm font-montserrat"><a href="">Overview</a></li>
            <li className="hover:text-sm font-montserrat"><a href=""> FAQs</a></li>
            <li className="hover:text-sm hover:text-transparent font-montserrat hover:bg-clip-text hover:bg-gradient-to-r hover:from-customPurple-light hover:to-customPurple-dark"><a href=""> Contact</a></li>
          </span>
          <li>
            <button className="button w-36 py-[14px] gradient-button text-sm font-black font-montserrat">
              Register
            </button>
          </li>
        </span>
      </div>}
    </div>
   );
}

export default Navbar;