import React from 'react'
import Image from 'next/image'
 const ComerciosLocais = () => {
  return (
    <main className="flex-1 flex justify-between px-8 items-center gap-[10vw] ">
      <div className="w-[45%] text-center flex flex-col gap-16 mb-40">
        <div className="flex items-center self-center gap-8">
          <Image src="/assets/ViaMobilidade.svg" alt="ViaMobilidade-fundo" width={50} height={50}/>
          <h1 className="font-medium text-[3rem]">
            Estação Paulista
          </h1>
        </div>
        

          <h2 className="font-normal text-[2.5rem]">
            Loja 1: Chilli Beans
          </h2>

          <p className="font-normal text-[1.5rem]">
            Instalada na estação desde 2012, tem como produto mais vendido atualmente os óculos temáticos dos Beatles (a partir de 198 reais).  A loja trabalha ainda com relógios de pulso.
          </p>

          <p className="font-normal text-[1.5rem]">
            7h/22h (seg. a sex.); 8h/18h (sáb.). Telefone: 4114-8992. Localização: Terceiro piso a partir do acesso localizado na Rua da Consolação. 
          </p>
      </div>
      


      <div className="w-[55%]">
        <Image width={1500} height={1500} src="./assets/ChiliBeans.svg" alt="Imagem chili" />
      </div>
      



    </main>
  )
}
export default ComerciosLocais
