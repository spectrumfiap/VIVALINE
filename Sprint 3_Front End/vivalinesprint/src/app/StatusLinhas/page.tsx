import React from 'react'
import Image from 'next/image'
const Status = () => {
  return (
    <main className="flex-1  bg-gradient-to-b from-white to-[#C7CDCF]">
        <div>
          <h1 className="font-sans text-[3rem] pl-8">Status das linhas</h1>
        </div>

        <div className="flex items-center justify-center">
          <Image src="/assets/status-fundo.png" width={450} height={300} alt="Imagem-status"/>
        </div>

        <h1 className="font-sans text-[1.50rem] font-medium flex justify-center pt-14 ">
          Situações de falha no sistema: saiba como o Metrô informa os passageiros
        </h1>

        <div className="justify-center flex items-center">
          <p className="font-sans text-[1.50rem] font-light pt-14 text-justify w-[80rem] pb-5">
          Se a ocorrência acontece somente em um trecho da linha, você é informado por mensagens sonoras nos trens e estações.
          <br></br>
          O metrô é preparado para resolver rapidamente essas ocorrências e compensar o tempo de parada até o final de sua viagem.
        </p>
        </div>
        
        <div className="justify-center flex items-center">
          <h1 className="font-light text-[1.50rem] ">
            Quando a ocorrência altera o tempo de viagem: 
          </h1>
        </div>

        <div className="justify-center flex items-center">
          <p className="font-light text-[1.20rem]">
          Divulgamos pela página STATUS DAS LINHAS em nosso site e nos totens VivaLine nas estações.
          </p>
        </div>

    </main>
  )
}
export default Status