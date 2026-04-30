import { FaCheck } from "react-icons/fa6";
import keylock from "../assets/keylock.svg";
import vector from "../assets/Vector.svg";

function PrivacyPolicy() {
  return (
    <div className="py-40">
      <div className="flex flex-col items-center font-montserrat mt-6 pt-6 ">
        <div className="grid grid-cols-1 w-full">
          <div className="text-center lg:hidden">
            <h4 className="font-clashDisplay text-xl font-bold lg:text-[32px] leading-snug">
              Privacy Policy and <br />{" "}
              <span className="text-customPurple">Terms</span>
            </h4>
            <p className="text-xs lg:text-base">
              Last updated on September 12, 2023
            </p>
            <p className="text-xs lg:text-base mt-8">
              Below are our privacy & policy, which outline a <br />
              lot of goodies. it’s our aim to always take of our <br />
              participant
            </p>
          </div>
          <div className="lg:flex lg:px-16 lg:items-start lg:gap-10">
            <div className="space-y-12 place-self-start lg:w-1/2 lg:flex lg:flex-col lg:justify-start lg:items-start">
              <div className="space-y-6 lg:text-left hidden lg:block mt-20">
                <h4 className="font-clashDisplay text-xl font-bold lg:text-[32px] leading-snug">
                  Privacy Policy and <br />{" "}
                  <span className="text-customPurple">Terms</span>
                </h4>
                <p className="text-xs lg:text-base lg:opacity-75">
                  Last updated on September 12, 2023
                </p>
                <p className="text-xs lg:text-base">
                  Below are our privacy & policy, which outline a <br />
                  lot of goodies. it’s our aim to always take of our <br />
                  participant
                </p>
              </div>
              <div className="border-[2px] border-solid border-customPurple rounded-lg py-8 w-full max-w-[680px] place-self-center flex flex-col items-center lg:text-base md:px-2 md:w-full lg:px-14 lg:py-20 lg:place-self-start">
                <div className="text-center text-xs lg:text-base leading-[26px] w-full md:w-full lg:text-left">
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </div>
                <div className="text-xs text-left mx-3 mt-6">
                  <div className="font-semibold mb-4">
                    <h6 className="text-customPurple text-xsm lg:text-base mb-2">
                      Licensing Policy
                    </h6>
                    <p className="lg:text-base ">
                      Here are terms of our Standard License:
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex gap-4">
                      <div className="bg-[#2DE100] p-1 rounded-full grid place-items-center h-5 w-6">
                        <FaCheck className="font-bold" />
                      </div>
                      <p className="leading-[22px] lg:text-base ">
                        The Standard License grants you a non-exclusive right to
                        navigate and register for our event
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-[#2DE100] p-1 rounded-full grid place-items-center h-5 w-6">
                        <FaCheck />
                      </div>
                      <p className="leading-[22px] lg:text-base ">
                        You are licensed to use the item available at any free
                        source sites, for your project developement
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-8">
                  <button className="button w-24 h-8 text-xs lg:text-base lg:w-40 lg:h-14">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
              <div className="relative w-full max-w-[520px] h-[880px]">
                <img className="absolute inset-0 w-full h-full object-contain" src={vector} alt="vector" />
                <img
                  className="absolute left-1/2 bottom-[-130px] w-[100%] -translate-x-1/2"
                  src={keylock}
                  alt="keylock"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid place-items-center md:w-full mt-16 md:mt-32 lg:hidden">
          <img className="z-0 md:w-1/2" src={vector} alt="vector" />
          <img
            className="relative bottom-56 md:w-1/2 md:bottom-96"
            src={keylock}
            alt="keylock"
          />
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
