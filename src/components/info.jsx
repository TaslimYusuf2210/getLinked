import bigIdea from "../assets/The big idea.svg"
import rulesImage from "../assets/rulespicture.svg"
import judgeImage from "../assets/judgeimage.svg"

function Info() {
  return ( 
    <div className="text-center">
      <div>
        <div className="grid">
          <img className="place-self-center" src={bigIdea} alt="big idea" />
        </div>
        <div className="m-8">
          <h5 className="font-clashDisplay text-xl font-bold">Introduction to getlinked <br />
          <span className="text-customPurple"> tech Hackathon 1.0</span></h5>
          <p className="text-xsm font-montserrat leading-8">
          Our tech hackathon is a melting pot of <br />
          visionaries, and its purpose is as clear as <br />
          day: to shape the future. Whether you're <br />
          a coding genius, a design maverick, or a <br />
          concept wizard, you'll have the chance to <br />
          transform your ideas into reality. Solving <br />
          real-world problems, pushing the boundaries <br />
          of technology, and creating solutions that can <br />
          change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div>
        <div className="grid">
          <img src={rulesImage} alt="image" className="place-self-center" />
        </div>
        <div className="m-8">
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
      <div>
        <div className="grid">
          <img src={judgeImage} alt="image" className="place-self-center" />
        </div>
        <div className="m-8">
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
        </div>
      </div>
    </div>
   );
}

export default Info;