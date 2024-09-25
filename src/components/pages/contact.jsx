import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return ( 
    <div className="font-montserrat grid gap-20 place-items-center text-left px-16">
      <div className="w-full ">
        <p className="text-xl leading-6 text-customPurple font-clashDisplay mt-10">
        Questions or need <br />
        assistance? <br />
        Let us know about it
        </p>
        <p className="text-xs mt-8">
        Email us below to any question related <br />
        to our event
        </p>
      </div>
      <div className="w-full text-center">
        <form className="grid grid-cols-1 gap-6 w-full" action="">
          <input className="input-border placeholder-white" placeholder="Team's Name" type="text" />
          <input className="input-border placeholder-white" placeholder="Topic" type="text" />
          <input className="input-border placeholder-white" placeholder="Email" type="email" />
          <input className="input-border placeholder-white" placeholder="Message" type="textarea" />
          <div className="w-full">
          <button className="button w-44 py-[18px]">Submit</button>
          </div>
        </form>
      </div>
      <div className="text-center flex flex-col gap-4 ">
        <p className="text-customPurple text-xs">Share on</p>
        <div className="flex gap-2 text-sm">
        <FaInstagram />
            <FaXTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
        </div>
      </div>
    </div>
   );
}

export default Contact;