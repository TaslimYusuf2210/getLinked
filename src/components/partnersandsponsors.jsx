import sponsors from "../assets/sponsors.svg"
import Glow from "./Glow"

function PartnersAndSponsors() {
  return (
  <div className="overflow-hidden">
    <div className="flex flex-col justify-center font-montserrat my-12 px-6 py-6">
        <div className="text-center relative z-10">
          <h4 className="font-clashDisplay text-xl font-bold lg:text-[32px]">Partners and Sponsors</h4>
          <p className="text-xs mt-4 lg:text-base">Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors</p>
        </div>
        <div className="grid mt-12 place-items-center">
          <div className="relative w-[90%] md:w-[80%] flex justify-center">
            {/* Top left glow */}
            <Glow className="-top-[20%] -left-[10%] md:-top-[30%] md:-left-[5%]" size="md" />
            
            <img className="w-full relative z-10" src={sponsors} alt="sponsors" />
            
            {/* Bottom right glow */}
            <Glow className="-bottom-[20%] -right-[10%] md:-bottom-[30%] md:-right-[5%]" size="md" />
          </div>
        </div>
    </div>
  </div>
   );
}

export default PartnersAndSponsors;