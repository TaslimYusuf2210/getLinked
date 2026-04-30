import cup from "../assets/cup.svg"
import rewards from "../assets/Rewards.svg"
import Glow from "./Glow"

function PricesAndReward() {
  return ( 
    <div>
      <div className="flex flex-col justify-center font-montserrat my-6 px-6 py-6">
        <div className="text-center">
          <h4 className="font-clashDisplay text-xl font-bold lg:text-[32px] lg:leading-snug">Prices and <br /> <span className="text-customPurple">Rewards</span></h4>
          <p className="text-sm lg:text-base">Highlight of the prizes or rewards for winners <br />
          and for participants.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 relative">
          <div className="grid place-items-center w-full relative">
            <Glow className="-top-[20%] left-0 md:left-[10%] lg:left-[20%]" size="md" />
            <img className="lg:w-3/4 relative z-10" src={cup} alt="cup"/>
          </div>
          <div className="grid place-items-center w-full relative mt-16 md:mt-0">
            <Glow className="top-[20%] right-[-10%] md:right-[-20%]" size="md" />
            <img className="lg:w-3/4 relative z-10" src={rewards} alt="rewards"/>
          </div>
        </div>
      </div>
    </div>
   );
}

export default PricesAndReward;