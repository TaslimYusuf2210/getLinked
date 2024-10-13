import chain from "../assets/chain.png";
import spark from "../assets/spark.svg";
import redLine from "../assets/line-vector.svg";
import bulb from "../assets/bulb.svg";
import purpleLensFlare from "../assets/PurpleLensFlare.svg";
import man from "../assets/man.svg";
import crystalball from "../assets/crystalball.svg";

function Register() {
  return (
    <div>
      <div className="md:px-16 md:flex md:justify-between md:w-full  hidden">
        <div></div>
        <div>
          <p className="text-base italic text-white font-bold mt-6 font-montserrat lg:text-2xl">
            Igniting a Revolution in HR Innovation
          </p>
          <img
            className="min-w-[115px] relative left-52 lg:w-52 lg:left-[270px]"
            src={redLine}
            alt="redLine"
          />
        </div>
      </div>
      <div className="py-4 text-center md:text-left md:flex md:px-16">
        <img
          className="absolute top-0 z-0 bottom-2 md:left-28 md:mb-8 md:hidden"
          src={purpleLensFlare}
          alt="gradient"
        />
        <div className="flex flex-col justify-center items-center md:w-3/5 md:items-start">
          {/* <div className="md:hidden flex flex-col w-[325px] mx-9 ">
            <p className="font-base italic text-white font-bold font-montserrat">
              Igniting a Revolution in HR Innovation
            </p>
            <div className="flex justify-between">
              <div></div>
              <img className="w-[115px] " src={redLine} alt="redLine" />
            </div>
          </div> */}
          <div className="font-bold text-[32px] z-10 font-clashDisplay md:text-[36px] lg:text-5xl">
              <img className="relative top-6 left-56 lg:left-[310px] lg:top-4" src={bulb} alt="bulb" />
              getlinked Tech <br />
            <div className="flex justify-center relative">
              <span>Hackathon</span>
              <span className="text-customPurple">1.0</span>
              <img src={chain} alt="chain" />
              <img src={spark} alt="spark" />
            </div>
          </div>
          <p className="text-sm font-montserrat mt-8 lg:text-base">
            Participate in getlinked tech Hackathon <br />
            2023 stand a chance to win a Big prize
          </p>
          <button className="button w-40 mt-10 py-4">Register</button>
          <div className="font-unica text-5xl mt-10">
            00<span className="font-montserrat text-sm">H</span> 00
            <span className="font-montserrat text-sm">M</span> 00
            <span className="font-montserrat text-sm">S</span>
          </div>
        </div>
        <div className="lg:w-[80%]">
          <img className="w-full mt-12 lg:w-[90%] lg:ml-12" src={man} alt="man" />
          <img
            className="absolute left-4 top-[530px] w-[90%] md:top-36 md:w-2/5 md:left-[50%] lg:top-[200px]"
            src={crystalball}
            alt="crystalball"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
