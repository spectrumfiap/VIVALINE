"use client";

import { useState } from "react";
import Image from "next/image";
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: "O que é o Totem Vivaline CCR?", answer: "O totem é um sistema que facilita o acesso a informações e serviços do metrô." },
    { question: "O assistente virtual pode responder a qualquer pergunta?", answer: "Ele responde às principais dúvidas sobre o sistema de transporte." },
    { question: "O totem é acessível para pessoas com deficiência?", answer: "Sim, ele possui acessibilidade para cadeirantes e deficientes visuais." },
    { question: "Posso comprar bilhetes através do totem?", answer: "Sim, você pode comprar bilhetes diretamente pelo totem." },
  ];

  return (
    <div className="flex flex-col gap-20 min-h-screen bg-gray-100 p-6">
        <div className="">
         <h1 className="text-3xl font-bold mb-4">DÚVIDAS FREQUENTES</h1>
        </div>

      <div className="bg-white shadow-md rounded-lg p-4 w-full ">
        {questions.map((q, index) => (
          <div key={index} className="border-b">
            <button className="w-full flex justify-between items-center p-3 hover:bg-gray-200" onClick={() => toggleQuestion(index)}> {q.question}
                <Image src="/assets/Arrow up-right.svg" width={10} height={10} alt="Seta" className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-90" : ""}`}/>
            </button>


            {openIndex === index && (
              <div className="p-3 text-gray-600 transition-opacity duration-300">
                {q.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
