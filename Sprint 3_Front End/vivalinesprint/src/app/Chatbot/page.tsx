import Image from 'next/image'
import React from 'react'
const Chatbot = () => {
  return (
    <main className="flex-1">
  <div className="relative bg-cover bg-center h-full pt-10 pl-10 [background-image:url('/assets/metro-barrafunda.png')]">
    
    {/* Overlay escuro separado */}
    <div className="absolute inset-0 bg-black opacity-60"></div>

    {/* Conteúdo acima da overlay */}
    <div className="relative z-10 h-full">
      <Image src="/assets/VivaChat.svg" className="w-[80px] md:w-[80px] lg:w-[100px] " width={100} height={100} alt="vivavchat" />

      <div className="flex flex-col justify-center items-center h-full pb-90 gap-10">
        <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold  ">Como posso ajudar?</h1>
        <input className="border-2 rounded-4xl pl-20 mt-6 
            ml-2 border-none bg-white p-5 text-[1rem] md:text-2xl lg:text-2xl text-black w-[60%] md:w-[50%] lg:w-[50%] gap-1 [background-image:url('/assets/chat_bubble_search.svg')] bg-no-repeat bg-[position:30px_22px] " placeholder="Digite sua dúvida" />
      </div>

    </div>

  </div>
</main>

  )
}
export default Chatbot