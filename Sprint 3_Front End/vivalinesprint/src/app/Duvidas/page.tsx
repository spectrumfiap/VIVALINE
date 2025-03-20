"use client";

import { useState } from "react";
import Image from "next/image";
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: "O que é o Totem Vivaline CCR?", answer: "Nosso projeto propõe o desenvolvimento de um sistema integrado para totens interativos voltado aos passageiros e funcionários das estações de metrô da CCR. O objetivo é atuar como um guia completo, oferecendo suporte com mapas do metrô, informações detalhadas sobre as estações (incluindo estrutura, acessos, e serviços disponíveis), localização de pontos comerciais, além de atualizações e notícias sobre o que está acontecendo no metrô. O sistema também fornecerá atendimento especializado, respostas a dúvidas frequentes e orientações sobre o funcionamento do metrô. Além disso, o totem contará com um assistente virtual para prestar suporte em tempo real, auxiliando os passageiros em qualquer necessidade." },
    { question: "Como funcionaria a aba Mapa Interativo?", answer: "O Mapa Interativo do Totem CCR foi desenvolvido para oferecer aos usuários uma navegação intuitiva e prática dentro do sistema ferroviário. Com ele, é possível acessar informações detalhadas sobre as linhas e estações, tornando a experiência de deslocamento mais eficiente e acessível." },
    { question: "Como encontro estabelecimentos dentro da estação?", answer: "A função Comércios Locais lista todas as lojas, lanchonetes e serviços disponíveis na estação, além de seus horários de funcionamento." },
    { question: "Existe um limite de tempo para usar o totem?", answer: "Não há um tempo limite, mas para garantir que todos os passageiros possam utilizar, recomenda-se que cada pessoa use por tempo razoável." },
  ];

  return (
    <div className="flex flex-col gap-20 min-h-screen bg-gray-100 p-6">
        <div className="">
         <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4">DÚVIDAS FREQUENTES</h1>
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
