import AccordionItem from "./accordion";
import thinking from "../assets/thinking.svg"
import Glow from "./Glow";

function Questions() {
  // const AccordionItem = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleAccordion = () => {
  //     setIsOpen(!isOpen);
  //   };

  // };
  const accordionData = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Yes you can. We boldly recommend you do so",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "You can ask for help on our discussion platform. A lot of your colleagues are willing to help",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer: "You can check out our project ideas",
    },
    {
      question: "What happens after the hackathon ends?",
      answer: "You can add the project you submitted to your portfolio",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer: "You are free to do any of such",
    },
  ];
  return (
    <div className="flex flex-col px-6 justify-center font-montserrat text-[12px] md:text-base">
      <div className="text-center lg:hidden">
        <h4 className="font-clashDisplay text-xl font-bold lg:text-[32px] leading-loose">
          Frequently Asked <br />
          <span className="text-customPurple">Question</span>
        </h4>
        <p className="mt-2">
          We got answers to the questions that you might <br />
          want to ask about <strong>getlinked Hackathon 1.0</strong>
        </p>
      </div>
      <div  className="mt-4 grid grid-cols-1 lg:grid-cols-2 place-items-center">

        <div className="lg:flex lg:flex-col lg:text-left">
          <div className=" hidden lg:block lg:text-left lg:px-12 mb-12">
            <h4 className="font-clashDisplay text-xl font-bold lg:text-[32px] leading-normal">
              Frequently Ask <br />{" "}
              <span className="text-customPurple">Question</span>
            </h4>
            <p className="mt-2 ">
              We got answers to the questions that you might <br />
              want to ask about <strong>getlinked Hackathon 1.0</strong>
            </p>
          </div>

          <div>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16 lg:mt-0 lg:w-full lg:h-full relative">
          <Glow className="-top-10 left-0 md:-top-20 md:-left-10 lg:-top-32 lg:left-10" size="lg" />
          <div className="hidden md:flex md:justify-center lg:block relative w-full lg:h-auto">
            <span className="q-mark z-0 text-[40px] text-[#A866FD] right-24 top-12  lg:text-7xl lg:top-[100px] lg:-right-[110px]">?</span>
            <span className="q-mark text-6xl text-customPurple right-10 top-8 z-20 lg:text-9xl lg:top-20 lg:left-[150px]">?</span>
            <span className="q-mark text-[40px] text-[#A866FD] left-2 top-12 z-20 md:bottom-1 lg:text-7xl lg:top-[100px] lg:left-[200px]">?</span>
          </div>
          <img className="z-10 md:w-[500px] lg:w-[741px] lg:h-[741px]" src={thinking} alt="think" />
        </div>
      </div>
    </div>
  );
}

export default Questions;
