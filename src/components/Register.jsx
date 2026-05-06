import chain from "../assets/chain.png";
import spark from "../assets/spark.svg";
import redLine from "../assets/line-vector.svg";
import bulb from "../assets/bulb.svg";
import purpleLensFlare from "../assets/PurpleLensFlare.svg";
import man from "../assets/man.svg";
import crystalball from "../assets/crystalball.svg";
import Glow from "./Glow";
import { useState, useEffect } from "react";

function Register() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set a target date (example: 24 hours from now)
    const calculateTimeLeft = () => {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 1); // 24 hours from now
      
      const difference = targetDate - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          hours: String(Math.floor(difference / (1000 * 60 * 60))).padStart(2, '0'),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
        });
      } else {
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div id="hero" className="relative  overflow-hidden min-h-screen flex flex-col justify-center">
      {/* <img className="absolute z-0 -top-[10%] -left-[10%] w-[80%] max-w-[800px] xl:max-w-[1086px] opacity-100 mix-blend-screen pointer-events-none" src={purpleLensFlare} alt="flare" /> */}
      <div className="lg:px-16 md:px-10 md:flex md:justify-between md:w-full  hidden">
        <div></div>
        <div>
          <p className="text-base italic text-white font-bold xl:mt-20 lg:mt-18 font-montserrat lg:text-2xl xl:text-4xl">
            Igniting a Revolution in HR Innovation
          </p>
          <img
            className="min-w-[115px] relative left-52 lg:w-52 lg:left-[270px] xl:w-64 xl:left-[470px]"
            src={redLine}
            alt="redLine"
          />
        </div>
      </div>
      <div className="py-4 text-center md:text-left md:flex md:px-10 lg:px-16 items-center">
        {/* <img
          className="absolute top-0 z-0 bottom-2 md:left-28 md:mb-8 md:hidden"
          src={purpleLensFlare}
          alt="gradient"
        /> */}
        <Glow className="top-0 -left-[10%] md:-top-[10%] md:left-0 opacity-100" size="lg" />
        <div className="flex flex-col justify-center items-center md:w-3/5 md:items-start z-10">
          {/* <div className="md:hidden flex flex-col w-[325px] mx-9 ">
            <p className="font-base italic text-white font-bold font-montserrat">
              Igniting a Revolution in HR Innovation
            </p>
            <div className="flex justify-between">
              <div></div>
              <img className="w-[115px] " src={redLine} alt="redLine" />
            </div>
          </div> */}
          <div className="font-bold text-[32px] z-10 font-clashDisplay md:text-[36px] xl:text-[60px] lg:text-[48px] relative">
              {/* getlinked <span className="relative">Tech<img className="absolute -top-6 right-2 w-6 md:w-8 lg:w-10 xl:w-14 md:-top-8 lg:-top-10 xl:-top-14 xl:right-4" src={bulb} alt="bulb" /></span> <br />
            <div className="flex justify-center relative">
              <span>Hackathon</span>
              <span className="text-customPurple">1.0</span>
              <img className="lg:w-12 xl:block lg:hidden" src={chain} alt="chain" />
              <img className="lg:w-12 xl:block lg:hidden" src={spark} alt="spark" />
            </div> */}
            <div className="flex items-center justify-center">
              <span>
                getLinked
              </span>
              <span className="flex justify-start items-start">
                <img src={bulb} alt="bulb" />
                Tech
              </span>
            </div>
            <div className="flex items-center justify-start">
              <p className="">Hackathon </p>
              <span className="text-customPurple-dark">1.0</span>
              <img src={chain} alt="chain" />
              <img src={spark} alt="spark" />
            </div>
            
          </div>
          <p className="text-sm font-montserrat mt-8 lg:text-base xl:text-xl">
            Participate in getlinked tech Hackathon <br />
            2023 stand a chance to win a Big prize
          </p>
          <button className="button w-40 mt-10 py-4 lg:font-base xl:font-bold">Register</button>
          <div className="font-unica text-5xl mt-10">
            {timeLeft.hours}<span className="font-montserrat text-sm">H</span> {timeLeft.minutes}
            <span className="font-montserrat text-sm">M</span> {timeLeft.seconds}
            <span className="font-montserrat text-sm">S</span>
          </div>
        </div>
        <div className="xl:w-full lg:ml-8">
          <img className="w-full mt-12 lg:w-[90%] lg:mx-auto max-w-full relative z-10" src={man} alt="man" />
          <img
            className="absolute left-1/2 -translate-x-1/2 top-[50%] md:top-1/4 w-[90%] md:w-[35%] lg:w-[45%] md:left-[60%]  xl:max-w-[700px] pointer-events-none z-20"
            src={crystalball}
            alt="crystalball"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
