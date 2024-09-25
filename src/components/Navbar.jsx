import { HiMenuAlt1 } from "react-icons/hi";

function Navbar() {
  return ( 
    <div className="w-full">
      <nav className="w-full px-3 py-2 list-none flex  justify-between">
        <li className="text-base font-bold text-white">get<span className="text-customPurple">linked</span></li>
        <li><HiMenuAlt1 className="font-bold text-white"/></li>
      </nav>
      <hr className="border-solid"/>
    </div>
   );
}

export default Navbar;