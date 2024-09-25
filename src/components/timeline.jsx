import Timelineprops from "./timelineprops";

function Timeline() {

  let timelineData = [
    {
      header:"Hackathon AnnouncementHackathon Announcement",
      body:"The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date:"November 18, 2023",
      number:"1"
    },
    {
      header:"Teams Registration begins",
      body:"Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date:"November 18, 2023",
      number:"2"
    },
    {
      header:"Teams Registration ends",
      body:"Interested Participants are no longer Allowed to register",
      date:"November 18, 2023",
      number:"3"
    },
    {
      header:"Announcement of the accepted teams and ideas",
      body:"All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date:"November 18, 2023",
      number:"4"
    },
    {
      header:"Getlinked Hackathon 1.0 Offically Begins",
      body:"Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date:"November 18, 2023",
      number:"5"
    },
    {
      header:"Demo Day",
      body:"Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date:"November 18, 2023",
      number:"6"
    },
  ]
  return ( 
    <div className="flex flex-col justify-center font-montserrat my-6 text-[12px] px-10">
      <div className="text-center">
        <h4 className="font-clashDisplay text-xl font-bold">Timeline</h4>
        <p className="text-sm">
          Here is the breakdown of the time we <br />
          anticipate using for the upcoming event.
        </p>
      </div>
      <div>
        {timelineData.map((item, index) => (
          <Timelineprops
          key={index}
          head={item.header}
          content={item.body}
          foot={item.date}
          id={item.number}
          />
        ))}
      </div>
    </div>
   );
}

export default Timeline;