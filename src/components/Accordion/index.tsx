"use client";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

export default function Accordion() {
  const [mounted, setMounted] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<null | number>();


  // O useEffect só roda no cliente, após a montagem
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const questions: Faq[] = [
    {
      question: "Quanto custa?",
      answer: "15 reais",
    },
    {
      question: "Quanto custa?",
      answer: "15 reais",
    },
    {
      question: "Quanto custa?",
      answer: "15 reais",
    },
    {
      question: "Quanto custa?",
      answer: "15 reais",
    },
  ];

  const handleOpenFaq = (index: number) => {
    setOpenQuestion(index === openQuestion ? null : index);
    alert("Aberto");
  };

  if (!mounted) {
    return <div>... </div>; 
  }

  return (
    <ul className="flex flex-col gap-5 ">
      {questions.map((question, index) => (
        <li
          key={index}
          onClick={() => handleOpenFaq(index)}
          className="
            flex flex-col p-2.5 overflow-hidden h-fit cursor-pointer
            bg-bg-light rounded-xl border border-border-custom/10"
        >
          <div className="flex items-center justify-between gap-5">
            <h3 className="text-lg font-medium">{question.question}</h3>

            <IoIosArrowDown
              className={` text-lg ${openQuestion !== index ? "" : "rotate-180"}`}
            />
          </div>

          <div
            className={`text-text-muted ${openQuestion !== index ? "h-0 opacity-0" : "h-4"}`}
          >
            <p>{question.answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
