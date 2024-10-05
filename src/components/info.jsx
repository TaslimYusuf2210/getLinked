import bigIdea from "../assets/The big idea.svg"
import rulesImage from "../assets/rulespicture.svg"
import judgeImage from "../assets/judgeimage.svg"

function Info() {
  return ( 
    <div className="text-center mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid">
          <img className="place-self-center" src={bigIdea} alt="big idea" />
        </div>
        <div className="m-8 place-self-center w-[300px] md:text-left md:w-auto">
          <h5 className="font-clashDisplay text-xl font-bold">Introduction to getlinked <br />
          <span className="text-customPurple"> tech Hackathon 1.0</span></h5>
          <p className="text-xsm font-montserrat leading-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid md:order-2">
          <img src={rulesImage} alt="image" className="place-self-center" />
        </div>
        <div className="m-8 place-self-center w-[300px] md:order-1 md:text-left md:w-auto">
          <h5 className="font-clashDisplay text-xl font-bold">Rules and<br />
          <span className="text-customPurple">Guidelines</span></h5>
          <p className="text-xsm font-montserrat leading-8">
          Our tech hackathon is a melting pot of <br />
          visionaries, and its purpose is as clear as day: <br />
          to shape the future. Whether you're a coding <br />
          genius, a design maverick, or a concept <br />
          wizard, you'll have the chance to transform <br />
          your ideas into reality. Solving real-world <br />
          problems, pushing the boundaries of <br />
          technology, and creating solutions that can <br />
          change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="grid md:order-2">
          <img src={judgeImage} alt="image" className="place-self-center md:w-[60%]" />
        </div>
        <div className="m-8 md:order-1">
          <h5 className="font-clashDisplay text-xl font-bold">Judging Criteria<br />
          <span className="text-customPurple">Key attributes</span></h5>
          <div className="text-xsm font-montserrat leading-6">
            <div className="mt-4">
              <span className="text-customPurple-light text-sm font-semibold">Innovation and Creativity:</span> Evaluate the 
              uniqueness and creativity of the solution. <br />
              Consider whether it addresses a real-world <br />
              problem in a novel way or introduces innovative <br />
              features.
            </div>
            <div className="mt-4">
              <span className="text-customPurple-light text-sm font-semibold">Functionality:</span> Assess how well the solution 
              works. Does it perform its intended functions <br />
              effectively and without major issues? Judges <br />
              would consider the completeness and <br />
              robustness of the solution.
            </div>
            <div className="mt-4">
              <span className="text-customPurple-light text-sm font-semibold">Impact and Relevance:</span> Determine the
              potential impact of the solution in the real world. <br />
              Does it address a significant problem, and is it <br />
              relevant to the target audience? Judges would <br />
              assess the potential social, economic, or <br />
              environmental benefits.
            </div>
            <div className="mt-4">
              <span className="text-customPurple-light text-sm font-semibold">Technical Complexity:</span>  Evaluate the technical 
              sophistication of the solution. Judges would <br />
              consider the complexity of the code, the use of <br />
              advanced technologies or algorithms, and the <br />
              scalability of the solution.
            </div>
            <div className="mt-4">
              <span className="text-customPurple-light text-sm font-semibold">Adherence to Hackathon Rules:</span> Judges will
              Ensure that the team adhered to the rules and <br />
              guidelines of the hackathon, including deadlines, <br />
              use of specific technologies or APIs, and any <br />
              other competition-specific requirements.
            </div>
          </div>
          <button className="button py-[18px] w-44 mt-4">Read More</button>
        </div>
      </div>
    </div>
   );
}

export default Info;