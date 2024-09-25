import { useState } from "react";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); // manages open/close state

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // toggles the accordion state
  };

  return (
    <div className="px-12 py-4 w-full">
      <div className="flex space-between justify-center items-end min-w-72 border-b-customPurple border-x-0 border-t-0 border-[2px] pb-2" onClick={toggleAccordion}>
        <h3 className="font-medium text-xs w-full">{question}</h3>
        <span className="text-lg font-bold relative top-1 text-customPurple">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div>{answer}</div>}
    </div>
  );
};

export default AccordionItem