import React from 'react'
import Image from 'next/image'
 const ComerciosLocais = () => {
  return (
    <main>
      <div className="flex flex-col justify-center">
        <div className="flex items-center space-x-4 pl-4">
          <Image src="/assets/ViaMobilidade.svg" alt="ViaMobilidade-fundo" width={50} height={50}/>
          <h1 className="flex font-medium text-[3rem]">
          Estação Paulista
          </h1>

          
  
        </div>

         <h1 className="flex flex-col font-normal text-[2.5rem] ">
           Loja 1: Chilli Beans
          </h1>
      </div>
      
      
      
      
      





    </main>
  )
}
export default ComerciosLocais
