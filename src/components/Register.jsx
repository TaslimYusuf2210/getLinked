import chain from "../assets/chain.png"
import spark from "../assets/spark.svg"
import redLine from "../assets/line-vector.svg"
import bulb from "../assets/bulb.svg"
import purpleLensFlare from "../assets/PurpleLensFlare.svg"
import man from "../assets/man.svg"
import crystalball from "../assets/crystalball.svg"

function Register() {
  return ( 
    <div className="py-8 text-center">
      <p className="font-base italic text-white font-bold font-montserrat">Igniting a Revolution in HR Innovation</p>
      <img className="min-w-[115px] absolute left-52" src={redLine} alt="redLine"/>
      <h1 className="font-bold text-[32px] font-clashDisplay mt-8">getlinked Tech <br /> 
        <img className="absolute top-32 left-[17rem]" src={bulb} alt="bulb" />
        <img className="absolute top-1" src={purpleLensFlare} alt="gradient" />
        <div className="flex justify-center">
          <span>Hackathon</span>
          <span className="text-customPurple">1.0</span>
          <img src={chain} alt="chain" />
          <img src={spark} alt="spark" />
        </div>
      </h1>
      <p className="text-sm font-montserrat mt-8">
      Participate in getlinked tech Hackathon <br />
      2023 stand a chance to win a Big prize
      </p>
      <button className="button w-40 mt-10">Register</button>
      <div className="font-unica text-5xl mt-10">00<span className="font-montserrat text-sm">H</span> 00<span className="font-montserrat text-sm">M</span> 00<span className="font-montserrat text-sm">S</span></div>
      <div>
        <img className="w-full mt-4" src={man} alt="man" />
        <img className="right-16 absolute top-[520px] h-80 w-[75%]" src={crystalball} alt="crystalball" />
      </div>
    </div>
   );
}

export default Register;