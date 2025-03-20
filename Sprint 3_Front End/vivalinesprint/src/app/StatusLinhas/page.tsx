import React from 'react'
import Image from 'next/image'
const Status = () => {
  return (
    <main className="flex-1 ">
        <div>
          <h1 className="font-sans pl-8 sm:text-1xl md:text-3xl lg:text-[3rem] ">Status das linhas</h1>
        </div>

        <div className="flex items-center justify-center">
          <Image className="sm:w-2 md:w-90 md:pt-5 lg:w-[450] " src="/assets/status-fundo.png" width={450} height={300} alt="Imagem-status"/>
        </div>

        <h1 className="font-sans  font-medium flex justify-center pt-14 md:text-[1.25rem] lg:text-[1.5rem] ">
          Situações de falha no sistema: saiba como o Metrô informa os passageiros
        </h1>

        <div className="justify-center flex items-center">
          <p className="font-sans md:text-[1rem] lg:text-[1.5rem] font-light pt-14 text-justify  md:w-[40rem] lg:w-[80rem] pb-5">
          Se a ocorrência acontece somente em um trecho da linha, você é informado por mensagens sonoras nos trens e estações.
          <br></br>
          O metrô é preparado para resolver rapidamente essas ocorrências e compensar o tempo de parada até o final de sua viagem.
        </p>
        </div>
        
        <div className="justify-center flex items-center">
          <h1 className="font-light lg:text-[1.5rem] ">
            Quando a ocorrência altera o tempo de viagem: 
          </h1>
        </div>

        <div className="justify-center flex items-center">
          <p className="font-light lg:text-[1.2rem]">
          Divulgamos pela página STATUS DAS LINHAS em nosso site e nos totens VivaLine nas estações.
          </p>
        </div>

    </main>
  )
}
export default Status