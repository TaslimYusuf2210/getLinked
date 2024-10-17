import bigIdea from "../assets/The big idea.svg"
import rulesImage from "../assets/rulespicture.svg"
import judgeImage from "../assets/judgeimage.svg"

function Info() {
  return ( 
    <div className="text-center mt-8 xl:px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:pr-[10%] xl:pr-0">
        <div className="grid">
          <img className="place-self-center xl:w-[490px] xl:h-[477px]" src={bigIdea} alt="big idea" />
        </div>
        <div className="m-8 place-self-center w-[300px] md:text-left md:w-auto">
          <h5 className="font-clashDisplay text-xl font-bold lg:text-[32px] lg:leading-normal">Introduction to getlinked <br />
          <span className="text-customPurple"> tech Hackathon 1.0</span></h5>
          <p className="text-xsm font-montserrat leading-8 lg:leading-loose lg:text-base">
          Our tech hackathon is a melting pot of 
          visionaries, and its purpose is as clear as 
          day: to shape the future. Whether you're 
          a coding genius, a design maverick, or a 
          concept wizard, you'll have the chance to 
          transform your ideas into reality. Solving 
          real-world problems, pushing the boundaries 
          of technology, and creating solutions that can 
          change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:pl-[10%]">
        <div className="grid md:order-2">
          <img  src={rulesImage} alt="image" className="place-self-center xl:w-[664px] xl:h-[664px]" />
        </div>
        <div className="m-8 place-self-center w-[300px] md:order-1 md:text-left md:w-auto">
          <h5 className="font-clashDisplay text-xl font-bold lg:text-[32px] lg:leading-normal">Rules and<br />
          <span className="text-customPurple">Guidelines</span></h5>
          <p className="text-xsm font-montserrat leading-8 lg:leading-loose lg:text-base">
          Our tech hackathon is a melting pot of 
          visionaries, and its purpose is as clear as day: 
          to shape the future. Whether you're a coding 
          genius, a design maverick, or a concept 
          wizard, you'll have the chance to transform
          your ideas into reality. Solving real-world 
          problems, pushing the boundaries of 
          technology, and creating solutions that can 
          change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="grid md:order-2 xl:order-1">
          <img src={judgeImage} alt="image" className="place-self-center md:w-[60%] xl:w-full xl:mt-20" />
        </div>
        <div className="m-12 md:order-1 xl:text-left w-[300px] place-self-center md:w-[440px] lg:w-auto lg:px-[20%] xl:px-0 xl:order-2">
          <h5 className="font-clashDisplay text-xl font-bold lg:text-[32px] leading-normal">Judging Criteria<br />
          <span className="text-customPurple">Key attributes</span></h5>
          <div className="xl:text-left text-xsm font-montserrat leading-6 lg:text-base text-center">
            <div className="mt-4">
              <span className="text-customPurple-light text-sm font-semibold lg:text-lg">Innovation and Creativity:</span> Evaluate the 
              uniqueness and creativity of the solution.
              Consider whether it addresses a real-world
              problem in a novel way or introduces innovative 
              features.
            </div>
            <div className="mt-4">
              <span className="text-customPurple-light text-sm font-semibold lg:text-lg">Functionality:</span> Assess how well the solution 
              works. Does it perform its intended functions 
              effectively and without major issues? Judges
              would consider the completeness and 
              robustness of the solution.
            </div>
            <div className="mt-4">
              <span className="text-customPurple-light text-sm font-semibold lg:text-lg">Impact and Relevance:</span> Determine the
              potential impact of the solution in the real world. 
              Does it address a significant problem, and is it 
              relevant to the target audience? Judges would 
              assess the potential social, economic, or 
              environmental benefits.
            </div>
            <div className="mt-4">
              <span className="text-customPurple-light text-sm font-semibold lg:text-lg">Technical Complexity:</span>  Evaluate the technical 
              sophistication of the solution. Judges would 
              consider the complexity of the code, the use of 
              advanced technologies or algorithms, and the
              scalability of the solution.
            </div>
            <div className="mt-4">
              <span className="text-customPurple-light text-sm font-semibold lg:text-lg">Adherence to Hackathon Rules:</span> Judges will
              Ensure that the team adhered to the rules and 
              guidelines of the hackathon, including deadlines, 
              use of specific technologies or APIs, and any
              other competition-specific requirements.
            </div>
          </div>
          <button className="button py-[18px] w-44 mt-4 lg:font-bold">Read More</button>
        </div>
      </div>
    </div>
   );
}

export default Info;