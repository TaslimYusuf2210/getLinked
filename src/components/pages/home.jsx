import Register from "../Register";
import Info from "../info";
import Questions from "../questions";
import Timeline from "../timeline";
import PricesAndReward from "../pricesandrewards";
import PartnersAndSponsors from "../partnersandsponsors";
import PrivacyPolicy from "../privacypolicy";
import Footer from "../footer";

function Home() {
  return ( 
    <div>
      <Register />
        <Info/>
        <Questions/>
        <Timeline/>
        <PricesAndReward/>
        <PartnersAndSponsors/>
        <PrivacyPolicy/>
        <Footer/>
    </div>
   );
}

export default Home;