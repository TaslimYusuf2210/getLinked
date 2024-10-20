import cup from "../assets/cup.svg"
import rewards from "../assets/Rewards.svg"

function PricesAndReward() {
  return ( 
    <div>
      <div className="flex flex-col justify-center font-montserrat my-6 px-6 py-6">
        <div className="text-center">
          <h4 className="font-clashDisplay text-xl font-bold lg:text-[32px] lg:leading-snug">Prices and <br /> <span className="text-customPurple">Rewards</span></h4>
          <p className="text-sm lg:text-base">Highlight of the prizes or rewards for winners <br />
          and for participants.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid place-items-center mt-12 w-full">
            <img className="lg:w-3/4" src={cup} alt="cup"/>
          </div>
          <div className="grid place-items-center mt-12 w-full">
            <img className="lg:w-3/4" src={rewards} alt="rewards"/>
          </div>
        </div>
      </div>
    </div>
   );
}

export default PricesAndReward;