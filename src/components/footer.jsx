import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#100B20] text-left grid font-montserrat py-12 text-xs lg:text-base">
      <div className="w-[370px] place-self-center flex flex-col gap-8 md:flex-row md:w-full md:px-10 px-12 lg:p-16">
        <div className="w-full">
          <h3 className="text-xl font-clashDisplay font-semibold lg:text-3xl">
            get<span className="text-customPurple">linked</span>
          </h3>
          <p className="mt-2 leading-5">
            Getlinked Tech Hackathon is a technology <br />
            innovation program established by a group <br />
            of organizations with the aim of showcasing <br />
            young and talented individuals in the field <br />
            of technology
          </p>
          <div className="flex gap-3 items-start w-full mt-10">
            <div  className="border-[0px] border-customPurple border-r-2 pr-3">
              Terms of Use
            </div>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className=" w-full flex justify-start md:justify-center">
          <div className="grid grid-cols-1">
            <h6 className="text-customPurple text-sm font-semibold lg:text-xl">Useful Links</h6>
            <ul className="list-none leading-8">
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>
            <div className="flex gap-3 mt-2">
              <p className="text-customPurple">Follow us</p>
              <FaInstagram className="text-xl"/>
              <FaXTwitter className="text-xl"/>
              <FaFacebookF className="text-xl"/>
              <FaLinkedinIn className="text-xl"/>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start md:justify-end">
          <div className="grid grid-cols-1">
              <h6 className="text-customPurple text-sm font-semibold lg:text-xl">Contact Us</h6>
              <div className="flex gap-4 mt-2">
                <FaPhoneVolume />
                <p>+234 679 81819</p>
              </div>
              <div className="flex gap-4 mt-6">
                <FaLocationDot />
              <p>
                27,Alara Street <br />
                Yaba 100012 <br />
                Lagos State
              </p>
              </div>
          </div>
        </div>
      </div>
        <div className="text-center mt-10">
          <p>All rights reserved. © getlinked Ltd.</p>
        </div>
    </div>
  );
}

export default Footer;
