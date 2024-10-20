import Timelineprops from "./timelineprops";

function Timeline() {
  return (
    <div className="flex flex-col justify-center items-center font-montserrat my-6 text-[12px] px-10 md:text-base ">
      <div className="text-center ">
        <h4 className="font-clashDisplay text-xl font-bold lg:text-[32px]">Timeline</h4>
        <p className="text-sm md:text-base mt-4">
          Here is the breakdown of the time we <br />
          anticipate using for the upcoming event.
        </p>
      </div>
      <div className="hidden lg:grid w-full mt-12">
        <div className="grid grid-cols-3 place-items-center place-self-center w-11/12 space-y-6">
          <div className="text-right place-self-end w-[auto]">
            <h6 className="font-bold text-2xl text-customPurple">
              Hackathon Announcement
            </h6>
            <p className="text-base leading-5">
              The getlinked tech hackathon 1.0 is formally announced to
              the general public and teams begin to get ready to register
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col  border-customPurple border-l-[1px] border-y-0 border-r-0 pl-4 h-28"></div>
              <div className="mr-4 font-extrabold h-8 w-8 text-xl grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                1
              </div>
            </div>
          </div>
          <div className="flex place-self-start ">
            <h6 className="font-bold text-2xl text-customPurple mt-32">
              November 18, 2023
            </h6>
          </div>
          <div className="place-self-end">
            <h6 className="font-bold text-2xl text-customPurple">
              November 18, 2023
            </h6>
          </div>
          <div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col  border-customPurple border-l-[1px] border-y-0 border-r-0 pl-4 h-16"></div>
              <div className="mr-4 font-extrabold h-8 w-8 text-xl grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                2
              </div>
            </div>
          </div>
          <div className="w-auto text-left place-self-start pt-8">
            <h6 className="font-bold text-2xl text-customPurple">
              Teams Registration begins
            </h6>
            <p className="text-base leading-5">
              Interested teams can now show their interest in the <br />
              getlinked tech hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
          <div className="w-auto text-right place-self-end">
            <h6 className="font-bold text-2xl text-customPurple">
              Teams Registration ends
            </h6>
            <p className="text-base leading-5">
              Interested Participants are no longer Allowed to <br />
              register
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col  border-customPurple border-l-[1px] border-y-0 border-r-0 pl-4 h-28"></div>
              <div className="mr-4 font-extrabold h-8 w-8 text-xl grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                3
              </div>
            </div>
          </div>
          <div className=" place-self-start">
            <h6 className="font-bold text-2xl text-customPurple mt-32">
              November 18, 2023
            </h6>
          </div>

          <div className="place-self-end">
            <h6 className="font-bold text-2xl text-customPurple">
              November 18, 2023
            </h6>
          </div>
          <div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col  border-customPurple border-l-[1px] border-y-0 border-r-0 pl-4 h-28"></div>
              <div className="mr-4 font-extrabold h-8 w-8 text-xl grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                4
              </div>
            </div>
          </div>
          <div className="text-left place-self-end">
            <h6 className="font-bold text-2xl text-customPurple">
              Announcement of the accepted teams and ideas
            </h6>
            <p className="text-base leading-5">
              All teams whom idea has been accepted into getlinked tech <br />
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
          <div className="w-auto text-right place-self-end">
            <h6 className="font-bold text-2xl text-customPurple">
              Getlinked Hackathon 1.0 Offically Begins
            </h6>
            <p className="text-base leading-5">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col  border-customPurple border-l-[1px] border-y-0 border-r-0 pl-4 h-28"></div>
              <div className="mr-4 font-extrabold h-8 w-8 text-xl grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                5
              </div>
            </div>
          </div>
          <div className="place-self-start">
            <h6 className="font-bold text-2xl text-customPurple mt-32">
              November 18, 2023
            </h6>
          </div>

          <div className="place-self-end">
            <h6 className="font-bold text-2xl text-customPurple">
              November 18, 2023
            </h6>
          </div>
          <div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col  border-customPurple border-l-[1px] border-y-0 border-r-0 pl-4 h-28"></div>
              <div className="mr-4 font-extrabold h-8 w-8 text-xl grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                6
              </div>
            </div>
          </div>
          <div className="text-left place-self-start pt-24">
            <h6 className="font-bold text-2xl text-customPurple">Demo Day </h6>
            <p className="text-base leading-5">
              Teams get the opportunity to pitch their projects to judges.
              The winner of the hackathon will also be announced on 
              this day
            </p>
          </div>
        </div>

      </div>


      {/* small screen display */}
        <div className="w-[350px] grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 md:w-auto lg:hidden">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex gap-2">
              <div className="flex flex-col  border-customPurple border-l-2 border-y-0 border-r-0 pl-4">
                <h6 className="font-bold text-customPurple">
                  Hackathon Announcement
                </h6>
                <p className="text-xs leading-5">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
            </div>
            <div className="text-left justify-start w-full flex gap-2 mr-4">
              <div className="font-semibold h-5 w-5 grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                1
              </div>
              <h6 className="font-bold text-customPurple">November 18, 2023</h6>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex gap-2">
              <div className="flex flex-col  border-customPurple border-l-2 border-y-0 border-r-0 pl-4">
                <h6 className="font-bold text-customPurple">
                  Teams Registration begins
                </h6>
                <p className="text-xs leading-5">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </div>
            <div className="text-left justify-start w-full flex gap-2 mr-4">
              <div className="font-semibold h-5 w-5 grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                2
              </div>
              <h6 className="font-bold text-customPurple">November 18, 2023</h6>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex gap-2">
              <div className="flex flex-col border-customPurple border-l-2 border-y-0 border-r-0 pl-4">
                <h6 className="font-bold text-customPurple">
                  Teams Registration ends
                </h6>
                <p className="text-xs leading-5">
                  Interested Participants are no longer Allowed to register
                </p>
              </div>
            </div>
            <div className="text-left justify-start w-full flex gap-2 mr-4">
              <div className="font-semibold h-5 w-5 grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                3
              </div>
              <h6 className="font-bold text-customPurple">November 18, 2023</h6>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex gap-2">
              <div className="flex flex-col  border-customPurple border-l-2 border-y-0 border-r-0 pl-4">
                <h6 className="font-bold text-customPurple">
                  Announcement of the accepted teams and ideas
                </h6>
                <p className="text-xs leading-5">
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </div>
            <div className="text-left justify-start w-full flex gap-2 mr-4">
              <div className="font-semibold h-5 w-5 grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                4
              </div>
              <h6 className="font-bold text-customPurple">November 18, 2023</h6>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex gap-2">
              <div className="flex flex-col  border-customPurple border-l-2 border-y-0 border-r-0 pl-4">
                <h6 className="font-bold text-customPurple">
                  Getlinked Hackathon 1.0 Offically Begins
                </h6>
                <p className="text-xs leading-5">
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
            </div>
            <div className="text-left justify-start w-full flex gap-2 mr-4">
              <div className="font-semibold h-5 w-5 grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                5
              </div>
              <h6 className="font-bold text-customPurple">November 18, 2023</h6>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex gap-2">
              <div className="flex flex-col  border-customPurple border-l-2 border-y-0 border-r-0 pl-4">
                <h6 className="font-bold text-customPurple">Demo Day</h6>
                <p className="text-xs leading-5">
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>
            </div>
            <div className="text-left justify-start w-full flex gap-2 mr-4">
              <div className="font-semibold h-5 w-5 grid place-items-center bg-gradient-to-r from-customPurple to-customPurple-dark rounded-[50%]">
                6
              </div>
              <h6 className="font-bold text-customPurple">November 18, 2023</h6>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Timeline;
