import sponsors from "../assets/sponsors.svg"

function PartnersAndSponsors() {
  return (
  <div>
    <div className="flex flex-col justify-center font-montserrat my-6 px-6 py-6">
        <div className="text-center">
          <h4 className="font-clashDisplay text-xl font-bold lg:text-[32px]">Partners and Sponsors</h4>
          <p className="text-xs mt-2 lg:text-base">Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors</p>
        </div>
        <div className="grid mt-6">
          <img className="place-self-center w-[90%]" src={sponsors} alt="sponsors" />
        </div>
    </div>
  </div>
   );
}

export default PartnersAndSponsors;