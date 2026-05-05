import bigIdea from "../assets/The big idea.svg";
import rulesImage from "../assets/rulespicture.svg";
import judgeImage from "../assets/judgeimage.svg";
import arrow from "../assets/arrow.svg";
import Star from "./Star";
import Glow from "./Glow";

function Info() {
  return (
    <div className="text-center md:px-10 lg:px-16 px-6 mt-12 md:mt-0">
      {/* aesthetics here */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:pr-0 xl:gap-10 w-full">
        <div className="grid">
          <div className="place-self-center flex md:justify-end md:items-end justify-center items-center md:w-4/5 w-full xl:w-full xl:h-full">
            <img
              className="place-self-center lg:w-[80%] md:w-full sm:w-3/5 w-4/5 lg:max-w-md xl:max-w-none xl:w-[490px] xl:h-[477px] hover:scale-105 transition-transform duration-500"
              src={bigIdea}
              alt="big idea"
            />
            <img
              className="lg:w-12 lg:h-14 md:w-9 md:h-10 hidden md:block"
              src={arrow}
              alt="arrow"
            />
          </div>
        </div>
        <div className="my-8 place-self-center w-full max-w-[90%] md:text-left md:w-full">
          <h5 className="font-clashDisplay text-xl font-bold lg:text-[32px] lg:leading-normal">
            Introduction to getlinked <br />
            <span className="text-customPurple"> tech Hackathon 1.0</span>
          </h5>
          <p className="text-xsm font-montserrat leading-8 lg:leading-loose lg:text-base">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 relative overflow-hidden">
        {/* Glow under rules and guideline text */}
        <Glow size="lg" className="top-[40%] md:top-[60%] left-[5%] md:-left-[5%]" />
        
        {/* Glow right of rules and guideline image */}
        <Glow size="lg" className="top-[10%] -right-[5%] md:-right-[10%]" />

        <div className="grid md:order-2">
          <img
            src={rulesImage}
            alt="image"
            className="place-self-center  md:w-4/5 sm:w-3/5 w-4/5 xl:max-w-none xl:w-[664px] xl:h-[664px] hover:scale-105 transition-transform duration-500 relative z-10"
          />
        </div>
        <div className="my-8 place-self-center w-full md:order-1 md:text-left md:w-auto px-4 md:px-0 relative z-10">
          <h5 className="font-clashDisplay text-xl font-bold lg:text-[32px] lg:leading-normal">
            Rules and
            <br />
            <span className="text-customPurple">Guidelines</span>
          </h5>
          <p className="text-xsm font-montserrat leading-8 lg:leading-loose lg:text-base">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 xl:mt-24 relative overflow-hidden items-center gap-8">
        {/* Glow below judging criteria image */}
        <div className="absolute bottom-[-10%] md:bottom-[-20%] left-[5%] md:left-[10%] -z-10">
          <Glow size="lg" />
        </div>

        <div className="grid relative w-full">
          <Star
            color="purple"
            size="lg"
            className="-top-10 left-[20%]"
            twinkle={true}
          />
          <img
            src={judgeImage}
            alt="image"
            className="place-self-center md:w-4/5 lg:w-full lg:px-16 xl:mt-20 hover:scale-105 transition-transform duration-500 relative z-10"
          />
          <Star
            color="grey"
            size="md"
            className="bottom-[10%] right-[30%] xl:right-[15%]"
            twinkle={true}
          />
        </div>
        <div className="my-12 lg:text-left lg:w-full md:w-[70%]  place-self-center lg:pr-16 lg:pl-0 relative px-4 md:px-0">
          <h5 className="font-clashDisplay text-xl font-bold lg:text-[32px] leading-normal">
            Judging Criteria
            <br />
            <span className="text-customPurple">Key attributes</span>
          </h5>
          <div className="text-left text-xsm font-montserrat leading-6 lg:text-[14px] xl:leading-[27.5px] mt-6">
            <div className="mb-6">
              <span className="text-customPurple-light text-sm font-bold lg:text-[16px]">
                Innovation and Creativity:{" "}
              </span>
              <span className="text-white text-[13px] lg:text-[14px]">
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </span>
            </div>
            <div className="mb-6">
              <span className="text-customPurple-light text-sm font-bold lg:text-[16px]">
                Functionality:{" "}
              </span>
              <span className="text-white text-[13px] lg:text-[14px]">
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </span>
            </div>
            <div className="mb-6">
              <span className="text-customPurple-light text-sm font-bold lg:text-[16px]">
                Impact and Relevance:{" "}
              </span>
              <span className="text-white text-[13px] lg:text-[14px]">
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
            </div>
            <div className="mb-6">
              <span className="text-customPurple-light text-sm font-bold lg:text-[16px]">
                Technical Complexity:{" "}
              </span>
              <span className="text-white text-[13px] lg:text-[14px]">
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>
            </div>
            <div className="mb-6">
              <span className="text-customPurple-light text-sm font-bold lg:text-[16px]">
                Adherence to Hackathon Rules:{" "}
              </span>
              <span className="text-white text-[13px] lg:text-[14px]">
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </div>
          </div>
          <Star
            color="white"
            size="lg"
            className="-bottom-8 left-[10%] md:-left-10"
            twinkle={true}
          />
          <button className="button py-[18px] w-[172px] mt-8 text-white text-base">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
