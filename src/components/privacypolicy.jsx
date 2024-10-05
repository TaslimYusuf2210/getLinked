import { FaCheck } from "react-icons/fa6";
import keylock from "../assets/keylock.svg";
import vector from "../assets/Vector.svg";

function PrivacyPolicy() {
  return (
    <div>
      <div className="flex flex-col items-center font-montserrat mt-6 pt-6 ">
        <div  className="grid grid-cols-1">

          <div className="text-center ">
            <h4 className="font-clashDisplay text-xl font-bold">
              Privacy Policy and <br />{" "}
              <span className="text-customPurple">Terms</span>
            </h4>
            <p className="text-xs">Last updated on September 12, 2023</p>
            <p className="text-xs mt-8">
              Below are our privacy & policy, which outline a <br />
              lot of goodies. it’s our aim to always take of our <br />
              participant
            </p>
          </div>
            <div className=" mt-8 border-[2px] border-solid border-customPurple rounded-lg py-8 w-[280px] place-self-center flex flex-col items-center md:px-2 md:w-auto md:mx-[20%]">
              <div className="text-center text-xs leading-[26px] w-[240px] md:w-auto">
                At getlinked tech Hackathon 1.0, we
                value your privacy and are committed 
                to protecting your personal information.
                This Privacy Policy outlines how we collect,
                use, disclose, and safeguard your data 
                when you participate in our tech hackathon 
                event. By participating in our event, you
                consent to the practices described in this
                policy.
              </div>
              <div className="text-xs text-left mx-3 mt-6">
                <div className="font-semibold mb-4">
                  <h6 className="text-customPurple text-xsm * mb-2">
                    Licensing Policy
                  </h6>
                  <p>Here are terms of our Standard License:</p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex gap-4">
                    <div className="bg-[#2DE100] p-1 rounded-full grid place-items-center h-5 w-6">
                      <FaCheck className="font-bold" />
                    </div>
                    <p className="leading-[22px]">
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#2DE100] p-1 rounded-full grid place-items-center h-5 w-6">
                      <FaCheck />
                    </div>
                    <p className="leading-[22px]">
                      You are licensed to use the item available at any free source
                      sites, for your project developement
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-8">
                <button className="button w-24 h-8 text-xs">Read More</button>
              </div>
            </div>

        </div>



          <div className="grid place-items-center md:w-full mt-16 md:mt-32">
            <img className="z-0 md:w-1/2" src={vector} alt="vector" />
            <img className="relative bottom-56 md:w-1/2 md:bottom-96" src={keylock} alt="keylock" />
          </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
