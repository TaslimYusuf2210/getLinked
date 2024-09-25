import AccordionItem from "./accordion";
import thinking from "../assets/thinking.svg"

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
    <div className="flex flex-col justify-center font-montserrat text-[12px]">
      <div className="text-center">
        <h4 className="font-clashDisplay text-xl font-bold">
          Frequently Ask <br />{" "}
          <span className="text-customPurple">Question</span>
        </h4>
        <p className="mt-2">
          We got answers to the questions that you might <br />
          want to ask about <strong>getlinked Hackathon 1.0</strong>
        </p>
      </div>
      <div className="mt-4">
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
      <div className="flex justify-center items-center mt-16">
        <span className="q-mark z-0 text-[40px] text-[#A866FD] mb-[295px] ml-[5rem]">?</span>
        <span className="q-mark text-6xl text-customPurple z-20 mb-[340px] mr-20">?</span>
        <span className="q-mark text-[40px] text-[#A866FD] mb-[295px] mr-52">?</span>
        <img className="z-10" src={thinking} alt="think" />
      </div>
    </div>
  );
}

export default Questions;
