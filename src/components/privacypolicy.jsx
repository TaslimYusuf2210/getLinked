import { FaCheck } from "react-icons/fa6";
import keylock from "../assets/keylock.svg";
import vector from "../assets/Vector.svg";

function PrivacyPolicy() {
  return (
    <div>
      <div className="flex flex-col items-center font-montserrat mt-6 pt-6 ">
        <div className="grid grid-cols-1">
          <div className="text-center xl:hidden">
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
          <div className="xl:flex xl:px-24">
            <div className="place-self-start xl:flex xl:flex-col xl:justify-start xl:items-start">
              <div className="xl:text-left hidden xl:block mt-20">
                <h4 className="font-clashDisplay text-xl font-bold lg:text-[32px] leading-snug">
                  Privacy Policy and <br />{" "}
                  <span className="text-customPurple">Terms</span>
                </h4>
                <p className="text-xs lg:text-base lg:opacity-75 xl:mt-7">
                  Last updated on September 12, 2023
                </p>
                <p className="text-xs lg:text-base mt-10">
                  Below are our privacy & policy, which outline a <br />
                  lot of goodies. it’s our aim to always take of our <br />
                  participant
                </p>
              </div>
              <div className=" mt-8 border-[2px] border-solid border-customPurple rounded-lg py-8 w-[280px] place-self-center flex flex-col items-center lg:text-base  md:px-2 md:w-auto md:mx-[20%] xl:px-14 xl:mx-0 xl:py-20 xl:w-4/6 xl:place-self-start xl:mt-20">
                <div className="text-center text-xs lg:text-base leading-[26px] w-[240px] md:w-auto xl:text-left">
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
            <div className="place-items-center w-full hidden xl:grid">
              <img className="z-0 w-full relative " src={vector} alt="vector" />
              <img
                className="relative bottom-56 md:w-full md:bottom-96"
                src={keylock}
                alt="keylock"
              />
            </div>
          </div>
        </div>

        <div className="grid place-items-center md:w-full mt-16 md:mt-32 xl:hidden">
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
